import AWS from '@/app/mailPage/lib/aws_ses.config'

interface IMail {
   mailTo:string[]
   mailText:string 
   mailSubject:string

}


export const sendEmail = ({mailTo  , mailText   , mailSubject}:IMail )=>{
    const ses = new AWS.SES({ apiVersion: '2010-12-01' });
    
    // Set up email parameters
    const params = {
      Destination: {
        ToAddresses: mailTo,
      },
      Message: {
        Body: {
          Text: {
            Data: mailText,
          },
        },
        Subject: {
          Data: mailSubject,
        },
      },
      Source: String(process.env.NEXT_PUBLIC_EMAIL_SOURCE),
    };
    
    // Send the email
    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent successfully:', data);
      }
    });
}

