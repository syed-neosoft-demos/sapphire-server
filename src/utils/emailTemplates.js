export const signup = (data) => {
  return `
     <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your ESS Account</title>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td bgcolor="#002444" style="background-color: #002444; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-family: Arial, sans-serif;">ABC CAFE</h1>
                </td>
            </tr>

            <tr>
                <td style="padding: 40px 30px;">
                    <p style="font-size: 18px; color: #002444; text-align: center; margin-bottom: 20px;">
                        Welcome ${data?.fullName}!
                    </p>

                    <p>Thank you for signing up. To complete your registration and access your account, please verify your email address.</p>

                    <table width="100%" cellpadding="25" cellspacing="0" border="0" bgcolor="#f8f9fa" style="margin: 20px 0; border: 1px solid #dee2e6;">
                        <tr>
                            <td style="text-align: center;">

                                <a href="${data?.url}" style="background-color: #0056b3; color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                                    Verify Email Address
                                </a>
                                
                                <p style="font-size: 14px; color: #666666; font-style: italic; margin-top: 20px;">
                                    This verification code will expire in 30 min
                                </p>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 25px 0;">
                        <tr>
                            <td>
                                <p style="margin-bottom: 15px;"><strong>To complete your verification:</strong></p>
                                <table width="100%" cellpadding="5" cellspacing="0" border="0">
                                    <tr>
                                        <td width="20" valign="top">•</td>
                                        <td>Click the "Verify Email Address" button above</td>
                                    </tr>
                                    <tr>
                                        <td width="20" valign="top">•</td>
                                        <td>Once verified, you'll have full access to your account</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" cellpadding="15" cellspacing="0" border="0">
                        <tr>
                            <td>
                                <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
                                    If the button doesn't work, you can copy and paste this link into your browser:
                                </p>
                                <p style="word-break: break-all; color: #0056b3; margin: 0;">
                                    ${data?.url}
                                </p>
                            </td>
                        </tr>
                    </table>

                    <p style="margin-top: 20px;">
                        If you didn't create an account with us, please ignore this email or contact support if you have concerns.
                    </p>
                </td>
            </tr>

            <tr>
                <td bgcolor="#002444" style="background-color: #002444; color: #ffffff; text-align: center; padding: 20px; font-size: 12px;">
                    <p style="margin: 0;">This is an automated message from Developer. Please do not reply to this email.</p>
                    <p style="margin: 5px 0 0;">&copy; 2025 Syed Hasnain Mehadi. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>

      `;
};

export const forgetPassword = (data) => {
  return `
      <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your ESS Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td bgcolor="#002444" style="background-color: #002444; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-family: Arial, sans-serif;">ESS</h1>
                    <p style="color: #ffffff; margin: 10px 0 0; font-size: 18px; font-family: Arial, sans-serif;">Employee Self Service</p>
                </td>
            </tr>
            
            <tr>
                <td style="padding: 40px 30px;">
                    <h2 style="color: #002444; margin-bottom: 20px;">Password Reset Request</h2>
                    <p>Hello ${data?.fullName},</p>
                    <p>We received a request to reset the password for your ESS account associated with ${data?.email}.</p>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0; background-color: #f8f9fa; border-left: 4px solid #002444;">
                        <tr>
                            <td style="padding: 20px;">
                                <p style="margin: 0 0 20px 0;">To reset your password, click the button below:</p>                                
                        
                                <a href="${data?.url}" style="background-color: #0056b3; color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
                                
                                <p style="font-size: 14px; color: #666666; font-style: italic; margin-top: 20px;">This password reset link will expire in 30 min.</p>
                            </td>
                        </tr>
                    </table>
                    
                    <table width="100%" cellpadding="15" cellspacing="0" border="0" bgcolor="#fff3cd" style="margin: 20px 0; border: 1px solid #ffeeba;">
                        <tr>
                            <td>
                                <p style="color: #856404; margin: 0; font-size: 14px;">
                                    <strong>Security Notice:</strong><br>
                                    If you didn't request a password reset, please ignore this email or contact your system administrator immediately.
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <p>For security reasons, this link can only be used once. Once you've reset your password, please use your new password to log in.</p>
                    <p>Having trouble? Contact our support team for assistance.</p>
                </td>
            </tr>
            
            <tr>
                <td bgcolor="#002444" style="background-color: #002444; color: #ffffff; text-align: center; padding: 20px; font-size: 12px;">
                    <p style="margin: 0;">This is an automated message from ESS. Please do not reply to this email.</p>
                    <p style="margin: 5px 0 0;">&copy; 2025 Employee Self Service. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
   `;
};
