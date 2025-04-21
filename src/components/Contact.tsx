import React, {useState} from 'react';
import {Mail, MapPin, Phone, Send} from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isOpening, setIsOpening] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const openMailto = () => {
    const recipient = 'bryanhenao96@gmail.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsOpening(true);
      
      // Open mailto link
      openMailto();
      
      // Show success message and reset form with a short delay
      setTimeout(() => {
        setIsOpening(false);
        setSubmitStatus('success');
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'bryanhenao96@gmail.com',
      link: 'mailto:bryanhenao96@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+57 304 127 1431',
      link: 'tel:+573041271431'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Cali, Colombia',
      link: 'https://maps.google.com/?q=Cali,Colombia'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact" subtitle="Get in touch with me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Fill out the form, and your default email client will open with your message.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target={info.title === 'Location' ? '_blank' : undefined}
                      rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/brayanhenao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a 
                  href="https://linkedin.com/in/bhenao6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://stackoverflow.com/users/5371842/brayan-henao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Stack Overflow Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M8 18h8M8 15h8M10.5 12h3M9.6 9.5l4.8 1M8.7 7l4.6 2M8 4.5l4 3"></path></svg>
                </a>
                <a 
                  href="https://medium.com/@bhenao6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Medium Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H8z"></path><path d="M0 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V3z"></path><path d="M18 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Email Client Opened!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your email client should have opened with your message. If it didn't, please email me directly at bryanhenao96@gmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-200 dark:focus:border-blue-500 dark:focus:ring-blue-900'
                    } dark:bg-gray-800`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-200 dark:focus:border-blue-500 dark:focus:ring-blue-900'
                    } dark:bg-gray-800`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.subject 
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-200 dark:focus:border-blue-500 dark:focus:ring-blue-900'
                    } dark:bg-gray-800`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-200 dark:focus:border-blue-500 dark:focus:ring-blue-900'
                    } dark:bg-gray-800`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isOpening}
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center ${
                      isOpening
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isOpening ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" /> Open Email Client
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
