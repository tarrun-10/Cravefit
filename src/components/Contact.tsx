import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['No. 20, MG Rd, Srinivasa Nagar', 'Avarampalayam, Illango Nagar', 'Coimbatore, Tamil Nadu 641006'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 6369036353'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 12:00 PM - 10:00 PM', 'Sat-Sun: 11:00 AM - 11:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['cravyfoods2024@gmail.com'],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/cravefit_cbe/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/916381940344', label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-500">
            Visit Us Today
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to experience the future of healthy cafe dining? We can't wait to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Get In Touch</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-yellow-500 p-6 rounded-xl hover:bg-yellow-600 transition-colors duration-300 border-2 border-yellow-600"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-black p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-black">{info.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-black">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-yellow-500">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-110 border-2 border-yellow-600"
                  >
                    <social.icon className="h-5 w-5 text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Find Us</h3>
            
            <div className="bg-yellow-500 p-6 rounded-xl hover:bg-yellow-600 transition-colors duration-300 border-2 border-yellow-600">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-black p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                </div>
                <h4 className="text-lg font-semibold text-black">Location</h4>
              </div>
              <p className="text-black mb-4">
                Visit us at our location in Coimbatore
              </p>
              
              <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-yellow-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.179168375262!2d76.9834331750455!3d11.025180389139114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590c92079b3f%3A0x1e9ea32372b1f1d7!2sCraveFit!5e0!3m2!1sen!2sin!4v1756824505833!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CraveFit Location - Coimbatore"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=No.+20,+MG+Rd,+Srinivasa+Nagar,+Avarampalayam,+Illango+Nagar,+Coimbatore,+Tamil+Nadu+641006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-yellow-500 font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300 border-2 border-black"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;