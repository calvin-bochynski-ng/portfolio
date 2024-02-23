"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { useActiveSectionContext } from "@/context/active-section-context";

export const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  // const { activeSection, setActiveSection } = useContext(ActiveSectionContext);
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Calvin.Bochynski-Ng</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground", underline: "hover" }),
                    {
                      "underline decoration-blue-500 font-bold":
                        activeSection === item.label,
                    }
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.label);
                  }}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:flex lg:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
          <LinkedInIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            return (
              <NavbarItem key={index}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground", underline: "hover" }),
                    {
                      "underline decoration-blue-500 font-bold":
                        activeSection === item.label,
                    }
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.label);
                  }}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
