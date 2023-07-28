<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';

const faqs = [
    {
        "Question": "Is there a fee to sign up for Cadremit?",
        "Answer": "No, signing up for Cadremit is completely free of charge. There are no upfront or hidden fees involved."
    },
    {
        "Question": "Are there any fees for sending payments?",
        "Answer": "No, Cadremit enables zero-fee payments to Canadian educational institutions. You can pay school fees and other related fees without incurring any transaction charges."
    },
    {
        "Question": "How do I register?",
        "Answer": "To create a Cadremit account, download the app from the App Store or Google Play Store. Click on the \"Open an Account\" button, and follow the steps to provide the necessary information, such as your name, email address, and password."
    },
    {
        "Question": "Why do I need to verify my account?",
        "Answer": "Account verification is a necessary step to ensure the security and compliance of our platform. It helps us confirm your identity and prevent fraudulent activities."
    },
    {
        "Question": "How can I verify my account?",
        "Answer": "To verify your Cadremit account, navigate to user profile within the app and click on the \"Verification\" section. Follow the instructions to provide the necessary documents or information for identification purposes. This may include uploading a scanned or photographed copy of your valid identification document, such as a passport or driver's license."
    },
    {
        "Question": "How can I add funds to my balance?",
        "Answer": "To add money to your balance, open the app and click the \"Add Money\" icon. Follow the provided instructions to successfully complete the funding process. Once the transaction is processed, the funded amount will be reflected in your balance."
    },
    {
        "Question": "How do I send payment to a school?",
        "Answer": "To send payment to a school through Cadremit, locate and select the \"Send Payment to School\" icon within the app. Choose the province where your school is located from the available options. From the provided dropdown list, select your specific institution.<br\> Enter your Student ID Number in the designated field. Fill out all the necessary information and submit your payment request. Once your payment has been processed, you will receive a confirmation email with the payment receipt. <br\> <br\>While most schools will acknowledge receipt of payment the following business day, we recommend allowing up to 72 hours for confirmation. If you have not received any communication from your school regarding the payment receipt after this period, please contact us for assistance."
    },
    {
    "Question": "How do I send money to a Canadian account?",
    "Answer": "To send money to a Canadian account, open the app and click on the 'Transfer' icon. Input the desired amount to send, along with the receiver's Interac e-transfer email. Validate the transaction by entering your PIN, and click 'Send' to initiate the transfer."
  },
  {
    "Question": "What is the minimum and maximum amount I can send?",
    "Answer": "$C50 is the lowest amount you can send. Verified users can send up to $C15,000 daily for school fee payments and up to $C7,000 daily for sending to a receiver."
    },
  {
    "Question": "What if I encounter any issues or need assistance?",
    "Answer": "Cadremit provides dedicated customer support to address any queries or concerns you may have. Feel free to reach out to us on Twitter, Instagram, or by email at contact@cadremit.com."
    }
];
</script>
<template>
    <section class="section">
        <div class="bg-ts">
            <div class="spreadball">

            </div>
        </div>
        <Adjusters>
            <Padding>

            <div class="glass-border" :id="'faq'">
                <div class="ios-m">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="heading">Frequently asked questions</div>
                <div class="grey-text" style="width:100%;text-align:center">Can’t find what you’re looking for? Contact us.</div>
                <div class="seperator">
                <label class="faq" v-for="(faq, index ) in faqs" v-bind:key="index">
                    <input type="checkbox" style="display: none;" />
                    <div class="quest"><span >{{faq.Question}}</span> <i class="ri-arrow-down-s-line"></i></div>
                    <div class="ans" v-html="faq.Answer"></div>
                </label>
               
               </div>
            </div>

            
            </Padding>
        </Adjusters>
    </section>
</template>
<style scoped>
.section{
    width:100%;
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
}
.glass-border{
    width:80%;
    margin: auto;
    border-radius: 20px;
border: 2px solid #FFF;
background: rgba(255, 255, 255, 0.14);
padding: 70px;
}
.seperator{
display: flex;
gap: 20px;
margin-top: 30px;
margin-bottom: 10px;
justify-content: center;
flex-wrap: wrap;
}
.faq{
width: calc(50% - 20px);
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.01);

}
.faq > div{
    padding: 10px;
    width:100%;
}
.faq .quest{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 200ms;
}
.faq .quest span{
    font-size: 0.8em;
    font-weight: 500;
    color:#444;
}
.faq .quest i{
    transition: 200ms;
    font-size: 1.4em;
}

.faq > div:last-child{
    display: none;
    border-top: 1px dotted grey;
}
.faq > input:checked + div + div{
    display: block !important
}
.faq > input:checked + div i{
    transform: rotate(180deg);
}

.heading{
    font-size:1.5em;
    font-weight:bold;
    color:black;
    text-align: center;
    width:100%;
    margin-top: 50px;
  
}
.bg-ts{
width:100%;
height: 100%;
position: absolute;
display: flex;
justify-content: center;
}
.spreadball{
    width:50%;
    height: 80%;
    border-radius: 50%;
background: rgba(217, 223, 244, 0.74);
filter: blur(52.5px);
}
.ios-m{
    display: flex;
    gap: 5px;
}
.ios-m > div{
   width:12px;
   height: 12px;
   border-radius: 50%;
}
.ios-m > div:first-child{
   background-color: #EB5757;
}
.ios-m > div:nth-child(2){
   background-color: #F39A4A;
}
.ios-m > div:last-child{
   background-color: #2FAA64;
}
@media screen and (max-width:900px) {
    .glass-border{
        width:100%;
    padding: 20px;
    }
    .seperator{
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    }
    .faq{
        width: 100%;
        
        }
        .faq .ans{
            font-size: 0.9em;
        }
}
</style>