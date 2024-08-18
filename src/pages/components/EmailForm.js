import React from "react";


export default function EmailForm() {
  const submitbtn = async (e) => {
    e.preventDefault();
    const email_to = document.querySelector('#email-to');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const submit = document.querySelector('.submitted');
    const mail_data = document.querySelector('.mail-data');
    var to = email_to.value;
    to = to.trim();
    to = to.split(',');
    console.log(to);
    if(to.length===1){
    if (email_to.value.length === 0 || subject.value.length === 0 || message.value.length === 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        const req = await fetch("https://back-end-deepanandhini1998-project-yfvc.onrender.com/api/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: await JSON.stringify({
              'mail_to': to[0],
              'mail_subject': subject.value,
              'mail_message': message.value
            }),
          });
      
          const data = await req.json();
      
          if (data.status === "ok") {
            mail_data.innerHTML = `Email was successfully sent to ${to[0]}<br>` + mail_data.innerHTML;
            console.log(data);
          } else {
            mail_data.innerHTML = `Error sending an email to ${to[0]}!<br>` + mail_data.innerHTML;
          }

        }
    }
    else if (to.length!==1){
        for(let i = 0; i<to.length;i++){
       
    
    if (email_to.value.length === 0 || subject.value.length === 0 || message.value.length === 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        const req = await fetch("https://back-end-deepanandhini1998-project-yfvc.onrender.com/api/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: await JSON.stringify({
              'mail_to': to[0],
              'mail_subject': subject.value,
              'mail_message': message.value
            }),
          });
      
          const data = await req.json();
      
          if (data.status === "ok") {
            mail_data.innerHTML = `Email was successfully sent to ${to[0]}<br>` + mail_data.innerHTML;
            console.log(data);
          } else {
            mail_data.innerHTML = `Error sending an email to ${to[0]}!<br>` + mail_data.innerHTML;
          }

        }    
        }
    }
  }
  
    return (
        
    
    <div>
        <br />
        <br />
        <br />
            <h1>Instructions:</h1>
            <p>
            If there were more than one email address then  you may enter the email addresses with ',' inbetween the email addresses.
            <br/>
            </p>
            <p>
            The subject and message are same for all the email address that you may enter on the input field.
            <br/>
            </p>
            <p>
            You may not refresh this page or close this tab until the sending process is completed because the process may become incomplete.
            <br/>
            </p>
            <p>
            You are required to enter email-to, subject and message since sending messagges on bulk email tool requires the fillings of required fields.
            <br/>
            </p>

        <form>
            <br />
            <br />
            <label htmlFor="email">Email To:</label>
            <input type="email" placeholder="You can enter email address here. For example : Deepa1998@gmail.com" id="email-to" required />
            <br />
            <br />
            <label for="subject">Subject:</label>
            <input type="text" placeholder="You may enter subject here." id="subject" required />
            <br />
            <br />
            <label htmlfor="message">Message:</label>
            <textarea placeholder="You may enter the message on here." id="message" rows="7" required></textarea>
            <br />
            <br />
            <input type="submit" onClick={submitbtn} className="submitted" value={"Send"}/>
        </form>
        <div className="mail-data"></div>
    </div>
    
    )
}