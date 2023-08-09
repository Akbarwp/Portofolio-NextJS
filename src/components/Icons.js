import * as React from "react"

export const InstagramIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current text-[#E4405F]`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
    <title>{"Instagram"}</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
)

export const LinkedInIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current text-[#0A66C2]`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <title>{"LinkedIn"}</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

export const GithubIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <title>{"GitHub"}</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

export const ShowwcaseIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current`}
        viewBox="0 0 100 90"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.64 7.241a67.234 67.234 0 0 1 7.064-.916c.536-.041.909-.13 1.14-.507.39-.634 1.084-.878 2.05-.95 2.6-.194 5.179-.208 7.785-.029 1.257.087 2.095.406 2.577 1.233.19.325.517.445 1.007.48 1.023.072 2.04.182 3.054.317 1.317.176 2.621.399 3.988.623-.236-.795-.603-1.468-1.016-2.129C61.711 2.84 59.18 1.121 55.415.424c-2.829-.523-5.692-.477-8.56-.311-1.795.104-3.508.46-5.107 1.076-3.332 1.28-4.971 3.466-6.109 6.052ZM1.981 9.547a12.25 12.25 0 0 1 3.153 1.76c2.095 1.603 3.537 3.515 4.873 5.472 1.485 2.174 2.654 4.445 3.756 6.746.219-.133.235-.292.282-.446.562-1.82 1.222-3.621 2.067-5.385 1.499-3.125 3.505-6.015 7.157-8.138.367-.213.337-.362.066-.613-1.157-1.072-2.406-2.08-3.863-2.94-1.152-.679-2.476-1.023-3.981-.998-3.304.054-6.31.833-9.16 1.977-1.642.659-3.17 1.43-4.35 2.565ZM45.45 7.29l-.342.05c-.051-.011-.104-.036-.153-.034-4.328.237-8.622.618-12.79 1.552-4.464 1-7.909 2.943-10.303 5.858-1.906 2.322-2.948 4.888-3.898 7.47-.993 2.698-1.683 5.448-2.296 8.204-.99 4.449-1.742 8.922-2.45 13.397a447.73 447.73 0 0 0-1.416 9.807c-.629 4.646-1.188 9.295-1.23 13.97-.039 4.101.087 8.19 1.83 12.149 1.143 2.596 3.11 4.73 6.42 6.152 3.43 1.474 7.184 2.27 11.028 2.869 5.693.887 11.478 1.179 17.284 1.246 6.24.072 12.475-.037 18.666-.692 4.539-.48 8.99-1.21 13.202-2.585 3.829-1.25 6.623-3.198 8.143-6.093 1.51-2.873 2.026-5.87 2.202-8.902.397-6.85-.515-13.656-1.473-20.456-.703-4.991-1.466-9.978-2.389-14.952-.565-3.042-1.164-6.078-1.951-9.093-.915-3.5-2-6.965-3.879-10.273-2.289-4.032-6.139-6.879-11.985-8.1-7.264-1.516-14.7-1.883-22.22-1.544Zm45.755 42.175c.003.397.02.794.16 1.181l.461 3.191c-.066.202-.033.392.1.65.108-.268.344-.42.27-.644l1.4-4.995c.097-.184.189-.368.138-.57.271-.456.333-.95.5-1.425 1.016-2.877 1.708-5.8 2.36-8.728.718-3.222 1.337-6.457 2.134-9.669.98-3.95 1.42-7.92 1.23-11.925-.071-1.482-.168-2.973-.716-4.513-.457.259-.857.453-1.206.688-1.61 1.087-2.752 2.428-3.775 3.816-2.914 3.953-4.805 8.195-6.571 12.47-.09.217-.038.424.013.639.914 3.878 1.578 7.78 2.206 11.686.437 2.716.864 5.432 1.296 8.148ZM.279 13.058c-.292.848-.277 1.715-.279 2.579-.01 3.925.578 7.814 1.284 11.7.613 3.377 1.465 6.721 2.295 10.069a465.6 465.6 0 0 0 2.498 9.73c.834 3.079 1.135 6.197 1.452 9.316.023.228-.03.473.188.7.042-.064.096-.11.102-.16a374.246 374.246 0 0 1 1.956-13.677c.718-4.433 1.403-8.868 2.415-13.272.133-.575.297-1.137-.002-1.74-.584-1.182-1.025-2.4-1.587-3.588-1.487-3.142-3.07-6.259-5.444-9.12-.961-1.16-1.956-2.314-3.495-3.14-.35-.218-.73-.605-1.147-.469-.347.114-.221.589-.288.906-.01.052.033.11.052.166Zm92.7-6.237a29.925 29.925 0 0 0-10.118-1.67 5.212 5.212 0 0 0-2.807.825c-1.426.913-2.417 2.057-3.266 3.277-.174.25.013.351.233.483a15.27 15.27 0 0 1 2.692 2.039c2.817 2.682 4.257 5.803 5.445 9.003.362.976.685 1.959 1.068 3.06 1.164-2.394 2.288-4.667 3.762-6.834 1.792-2.635 3.72-5.205 7.08-7.008l.436-.202.378-.152c.35-.092.138-.185 0-.278-.069-.2-.25-.34-.466-.463-.178-.247-.463-.413-.79-.548-.73-.497-1.58-.86-2.482-1.164-.373-.148-.714-.35-1.165-.368Z"
        />
    </svg>
)

export const ChromeIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current text-[#4285F4]`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <title>{"Another Portofolio"}</title>
        <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
    </svg>
)

export const ExternalLinkIcon = ({className, ...rest}) => (
    <svg
        className={`${className} fill-current`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
    </svg>
)

export const CircularText = ({className, ...rest}) => (
    <svg></svg>
)

export const SunIcon = ({className, ...rest}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g stroke-dasharray="2"><path d="M12 21v1M21 12h1M12 3v-1M3 12h-1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2"/></path><path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2"/></path></g><path fill="currentColor" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="0"><set attributeName="opacity" begin="0.5s" to="1"/></path></g><g fill="currentColor" fill-opacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0" fill="freeze" attributeName="fill-opacity" begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s" dur="0.4s" values="1;0"/></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s" dur="0.4s" values="1;0"/></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s" dur="0.4s" values="1;0"/></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s" dur="0.4s" values="1;0"/></path></g><mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1"><circle cx="12" cy="12" r="12" fill="#fff"/><circle cx="22" cy="2" r="3" fill="#fff"><animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18"/><animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"/><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12"/></circle><circle cx="22" cy="2" r="1"><animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18"/><animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"/><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10"/></circle></mask><circle cx="12" cy="12" r="6" fill="currentColor" mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"><set attributeName="opacity" begin="0.5s" to="0"/><animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10"/></circle></svg>
)

export const MoonIcon = ({className, ...rest}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" /><g fill="none" stroke="currentColor" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round" stroke-width="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"/></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.5s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0"/></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g><g fill="currentColor"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0"/></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0"/></path></g><g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"/><set attributeName="opacity" begin="0.6s" to="0"/></g><mask id="lineMdMoonFilledToSunnyFilledLoopTransition0"><circle cx="12" cy="12" r="12" fill="#fff"/><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22"/><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2"/><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3"/></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22"/><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2"/><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1"/></circle></mask><circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0"><set attributeName="opacity" begin="0.6s" to="1"/><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6"/></circle></svg>
)