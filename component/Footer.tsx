import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Me</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">satyammalviya281@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">+91 9644151109</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Indore, Madya Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/satyammalviya15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-700" />
              </a>
              <a 
                href="https://www.linkedin.com/in/satyammalviya15/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="https://github.com/satyammalviya15?tab=repositories" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <p>Developed By - Satyam Malviya</p>
        </div>
      </div>
    </footer>
  )
}