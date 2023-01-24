import Logo from "assets/Logo";
import IconsBurgerMenu from "components/IconsBurgerMenu";
import Footer from "components/Footer";
import Group47392 from "assets/Group47392";

export default function NRegistrationNotaryMobile(
  props: NRegistrationNotaryMobileProps
) {
  return (
    <div
      className={`relative bg-white gap-2.5 text-center w-[375px] h-[812px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div
        className="inset-x-0 top-0 absolute h-[812px] bg-[rgba(8,37,68,1)]"
       />
      <Logo />
      <IconsBurgerMenu />
      <Footer />
      <p
        className="h-12 absolute font-semibold text-white inline m-0 w-[345px] left-[15px] top-[452px] text-[40px] leading-[68px]"
      >
        Thank You!
      </p>
      <p
        className="left-4 absolute text-sm font-normal inline m-0 w-[342px] top-[508px] leading-[normal] text-[rgba(124,154,187,1)]"
      >
        Check your email and follow the instructions.
      </p>
      <Group47392 />
    </div>
  );
}

NRegistrationNotaryMobile.defaultProps = {
  style: {},
};

interface NRegistrationNotaryMobileProps {
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
