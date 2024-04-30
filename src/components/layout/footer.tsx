import { Link } from "react-router-dom";
import SiteLogo from "./site-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { footerNav } from "@/config/site";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="pb-16 pt-28">
          <div className="gap-10 space-y-10 md:grid md:grid-cols-12 md:space-y-0">
            <div className="col-span-4">
              <Link to="/" className="shrink-0">
                <SiteLogo
                  width={123}
                  height={39}
                  lightClasses="dark:hidden"
                  darkClasses="hidden dark:block"
                />
              </Link>
              <p className="mb-8 mt-6">
                At Creatorspe, we're the best at influencer marketing in India.
                We connect brands with social media stars to tell
                amazing stories
              </p>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faXTwitter} width={15} />
                </a>
                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#324e8c] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} width={15} />
                </a>
                <a
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#cd201f] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faYoutube} width={15} />
                </a>
              </div>
            </div>

            {footerNav &&
              footerNav.map((item, index) => (
                <div
                  key={item.title}
                  className={`${
                    index === 0 ? "xl:col-start-7" : ""
                  } col-span-3 xl:col-span-2`}
                >
                  <h2 className="mb-4 text-sm">{item.title}</h2>
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      {item.items.map((link) => (
                        <NavigationMenuItem
                          key={link.title}
                          className="text-sm"
                        >
                          <Link
                            to={link.href}
                            target={link?.external ? "_blank" : undefined}
                            rel={link?.external ? "noreferrer" : undefined}
                            className="block hover:text-primary"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              ))}
            <div className="col-span-3 xl:col-span-4">
              <h2 className="mb-4 text-sm">Company</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <address className="-mt-px leading-6">
                    Manish Nagar, Nagpur, Maharashtra 440037
                  </address>
                </li>
                <li>
                  <span>Phone: </span>
                  <a
                    href="tel:+1-800-1554-456-123"
                    className="hover:text-primary"
                  >
                    +91 9307189776
                  </a>
                </li>
                <li>
                  <span>Email: </span>
                  <a href="mailto:hi@margin.com" className="hover:text-primary">
                    info@telzonmarketing.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-12">
        <div className="container text-center">
          <span className="text-xs">
            © {new Date().getFullYear()} CretorsPe, Product of{" "}
            <a
              href="https://telzonmarketing.in/"
              className="hover:text-primary"
            >
              Telzon Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
