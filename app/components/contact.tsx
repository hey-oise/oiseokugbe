"use client";
import { Phone } from "lucide-react";
import {
  FaInstagram,
    FaFacebook,
      FaWhatsapp,
        FaTelegramPlane,
          FaTiktok,
          FaLinkedin,
          } from "react-icons/fa";
          import { SiGithub } from "react-icons/si";
          import {FaXTwitter } from "react-icons/fa6";
          import { MdEmail } from "react-icons/md";


          export default function Footer() {                         return (
                                                                      <div id="contact" className={`scroll-mt-20 pt-10 gap-10 min-h-100 w-full p-5 lg:p-10 flex flex-col transition-all duration-500`}>
                                                                            <div className="flex flex-col gap-2 justify-center">
                                                                                    <p className="text-slate-200 capitalize font-bold text-2xl">get in touch</p>
                                                                                            <p className="capitalize text-slate-500 max-w-150 font-semibold text-md">{"Interested in collaborating, exploring opportunities or discussing an idea? Feel free to reach out. I'd love to hear from you."}</p>
                                                                                                  </div>

                                                                                                        <div className="flex md:flex-row flex-col justify-start flex-wrap mb-10 lg:mb-0 lg:gap-20 gap-10 px-1">
                                                                                                                <div className="flex flex-col gap-2">
                                                                                                                          <p className="font-bold capitalize text-slate-300 text-xl">follow me!</p>
                                                                                                                                    <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://vm.tiktok.com/ZS9PCqwWnFSMf-E7Xtl/"><FaTiktok size={20} /> tiktok</a>
                                                                                                                                              <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://www.instagram.com/oiseokugbe?hvrq=ZTIzam55NWxyYnBv"><FaInstagram size={20} /> instergram</a>
                                                                                                                                                        <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://www.linkedin.com/in/oise-giwa-okugbe-2b7100318/?lipi=urn%3Ali%3Apage%3Ap_mwlite_search_srp_people%3BXc6bDh%2F4TkSvYIHZwtsgcQ%3D%3D"><FaLinkedin size={20} /> linkedin</a>
                                                                                                                                                                  <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://x.com/oiseokugbe"><FaXTwitter size={20}/> twitter</a>
  <a
    target="_blank"
      rel="noopener noreferrer"
        className="flex gap-1 font-bold capitalize text-slate-500 hover:underline"
          href="https://github.com/hey-oise"
          >
            <SiGithub size={20} />
              Github
              </a>                                                                                                                                                                        </div>
                                                                                                                                                                                  <div className="flex flex-col gap-2">
                                                                                                                                                                                            <p className="font-bold capitalize text-slate-200 text-xl">contact me!</p>
                                                                                                                                                                                                      <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://w.me/234 704 207 1497"><FaWhatsapp size={20} /> whatsapp</a>
                                                                                                                                                                                                                <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="https://t.me/heyoise"><FaTelegramPlane size={20} /> telegram</a>
                                                                                                                                                                                                                          <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="mailto:oiseokugbe@gmail.com"><MdEmail size={20} /> email</a>

                                                                                                                                                                                                                                    <a target="_balnk" className="flex gap-1 font-bold capitalize text-slate-500 hover:underline" href="tel:+234 704 207 1497"><Phone size={20}/> phone</a>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                        <div className="bottom-0 text-sm">
                                                                                                                                                                                                                                                                <p className="font-bold text-slate-400">© 2026 Oise Okugbe. All rights reserved.</p>
                                                                                                                                                                                                                                                                        <a target="blank" href={"https://wa.me/234 704 207 1497"} className="font-bold text-slate-500 pb-5">Designed & Developed by Oise Okugbe</a>
                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                    }