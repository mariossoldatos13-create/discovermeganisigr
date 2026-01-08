import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingInquiryRequest {
  vehicleName: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  countryCode?: string;
  pickupDate: string;
  dropoffDate: string;
  numberOfPeople?: string;
  notes?: string;
  contactMethod: "email" | "whatsapp" | "viber";
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data: BookingInquiryRequest = await req.json();
    
    console.log("Received booking inquiry:", JSON.stringify(data, null, 2));

    const {
      vehicleName,
      customerName,
      customerEmail,
      customerPhone,
      countryCode,
      pickupDate,
      dropoffDate,
      numberOfPeople,
      notes,
      contactMethod,
    } = data;

    // Format phone number for display
    const phoneDisplay = customerPhone ? `${countryCode || ""}${customerPhone}` : "Not provided";
    
    // Format contact info based on method
    const contactInfo = contactMethod === "email" 
      ? `Email: ${customerEmail}`
      : `Phone: ${phoneDisplay}`;

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
          🌊 New Booking Inquiry - Discover Meganisi
        </h1>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #0369a1; margin-top: 0;">📋 Inquiry Details</h2>
          <p><strong>Vehicle/Service:</strong> ${vehicleName}</p>
          <p><strong>Contact Method:</strong> ${contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1)}</p>
        </div>

        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #334155; margin-top: 0;">👤 Customer Information</h2>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>${contactInfo}</strong></p>
        </div>

        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #059669; margin-top: 0;">📅 Rental Dates</h2>
          <p><strong>Pick-up Date:</strong> ${pickupDate}</p>
          <p><strong>Drop-off Date:</strong> ${dropoffDate}</p>
          ${numberOfPeople ? `<p><strong>Number of People:</strong> ${numberOfPeople}</p>` : ""}
        </div>

        ${notes ? `
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2 style="color: #d97706; margin-top: 0;">📝 Additional Notes</h2>
          <p>${notes}</p>
        </div>
        ` : ""}

        <div style="margin-top: 30px; padding: 15px; background-color: #e0f2fe; border-radius: 10px; text-align: center;">
          <p style="margin: 0; color: #0369a1;">
            ${contactMethod === "email" 
              ? `<strong>Reply directly to this email or contact the customer at:</strong><br>${customerEmail}` 
              : `<strong>Contact the customer via ${contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1)} at:</strong><br>${phoneDisplay}`
            }
          </p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px; text-align: center;">
          This inquiry was submitted through the Discover Meganisi website.
        </p>
      </div>
    `;

    // Send email using Resend API directly via fetch
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Discover Meganisi <onboarding@resend.dev>",
        to: ["info@discovermeganisi.gr"],
        reply_to: contactMethod === "email" ? customerEmail : undefined,
        subject: `🌊 New Booking Inquiry: ${vehicleName} - ${customerName}`,
        html: emailHtml,
      }),
    });

    const emailResponse = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-booking-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
