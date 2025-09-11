import './WhatsAppButton.css';

const WhatsAppButton = ({ message, className = '' }) => {
  // Replace with your actual WhatsApp number (without spaces or special characters)
  const phoneNumber = "917012599817";
  
  // Format the message for URL encoding
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
    >
      <i className="fab fa-whatsapp"></i> WhatsApp
    </a>
  );
};

export default WhatsAppButton;