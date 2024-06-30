import localFont from "next/font/local";
import type { FC } from "react";

const iranSans = localFont({
  src: [
    {
      path: "./IRANSansXFaNum-Regular.ttf",
      weight: "normal"
    },
    {
      path: "./IRANSansXFaNum-Thin.ttf",
      weight: "100"
    },
    {
      path: "./IRANSansXFaNum-UltraLight.ttf",
      weight: "200"
    },
    {
      path: "./IRANSansXFaNum-Light.ttf",
      weight: "300"
    },
    {
      path: "./IRANSansXFaNum-Medium.ttf",
      weight: "500"
    },
    {
      path: "./IRANSansXFaNum-DemiBold.ttf",
      weight: "600"
    },
    {
      path: "./IRANSansXFaNum-Bold.ttf",
      weight: "700"
    },
    {
      path: "./IRANSansXFaNum-ExtraBold.ttf",
      weight: "800"
    },
    {
      path: "./IRANSansXFaNum-Black.ttf",
      weight: "900"
    }
  ],
  display: "swap",
  preload: true
});

const AppFontProvider: FC = () => {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx={true} global={true}>
      {`
        :root {
          font-family: ${iranSans.style.fontFamily}, sans-serif;
        }
      `}
    </style>
  );
};

export default AppFontProvider;
