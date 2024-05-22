import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router"

const config: DocsThemeConfig = {
  logo: <span>Learning</span>,
  project: {
    link: 'https://github.com/Belen-Luo/learning',
  },
  chat: {
    link: 'https://x.com/xielaoban100',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" shapeRendering="geometricPrecision"
        textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd"
        clipRule="evenodd" viewBox="0 0 512 512">
        <path
          d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
        <path fill="#fff" fillRule="nonzero"
          d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z" />
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/Belen-Luo/learning',
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== "/" ? "%s – Learning" : "Learning"
    };
  },
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="og:title" content={title ? title + " – Learning" : "Learning"} />
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" /> */}
      </>
    );
  },
  footer: {
    text: 'MIT 2024 © Belen Luo',
  },
}

export default config
