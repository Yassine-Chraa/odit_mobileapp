import React from "react";
import MainScreen from "../../components/main/MainScreen"
import { Text} from "react-native"
import profileStyles from "../../style/profileStyles";



function PrivacyPolicy() {
  return <MainScreen options={{ showHeader: false, title: "Privacy Policy" }}>

                <Text style={[profileStyles.headerTitle,{marginTop:20,textAlign:'center'}]}>Data Collection and Usage</Text>
                <Text style={profileStyles.mediumText}>
                    We value your privacy and are committed to safeguarding your personal information. When you use our app OdIt, we collect certain data to enhance your experience and provide valuable services. This data may include your name, email address, profile picture, and other relevant details. We use this information to personalize your interactions, improve our services, and communicate important updates.
                </Text>

                <Text style={[profileStyles.headerTitle,{marginTop:20,textAlign:'center'}]}>Compliance and Regulations</Text>
                <Text style={profileStyles.mediumText}>
                    We adhere to relevant data protection regulations and guidelines to ensure that your privacy rights are respected. If you have any questions or concerns about your data's privacy, please don't hesitate to contact us.
                </Text>

                <Text style={[profileStyles.headerTitle,{marginTop:20,textAlign:'center'}]}>Updates to Privacy Policy</Text>
                <Text style={profileStyles.mediumText}>
                    From time to time, we may update our Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes and provide you with the option to review and accept the updated terms. Your trust is essential to us, and we are dedicated to maintaining transparent and ethical data practices. Thank you for choosing [App Name]. If you have any inquiries or need further clarification, please reach out to us at odit.contact@gmail.com.
                </Text>

                <Text style={[profileStyles.headerTitle,{marginTop:20,textAlign:'center'}]}>Updates to Privacy Policy</Text>
                <Text style={profileStyles.mediumText}>
                    From time to time, we may update our Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes and provide you with the option to review and accept the updated terms. Your trust is essential to us, and we are dedicated to maintaining transparent and ethical data practices. Thank you for choosing [App Name]. If you have any inquiries or need further clarification, please reach out to us at odit.contact@gmail.com.
                </Text>

                <Text style={[profileStyles.headerTitle,{marginTop:20,textAlign:'center'}]}>Updates to Privacy Policy</Text>
                <Text style={profileStyles.mediumText}>
                    From time to time, we may update our Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes and provide you with the option to review and accept the updated terms. Your trust is essential to us, and we are dedicated to maintaining transparent and ethical data practices. Thank you for choosing [App Name]. If you have any inquiries or need further clarification, please reach out to us at odit.contact@gmail.com.
                </Text>
        
        </MainScreen>;
}

export default PrivacyPolicy;
