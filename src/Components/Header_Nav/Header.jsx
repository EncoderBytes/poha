// import React from 'react'
// import { Link as ScrollLink } from 'react-scroll';

import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';




const Header = () => {





    // const [activeLink, setActiveLink] = useState('home');

    // const handleClick = (link) => {
    //     setActiveLink(link);
    // };
    const [activeLink, setActiveLink] = useState('home');
    const [visitedLinks, setVisitedLinks] = useState([]);

    const handleClick = (link) => {
        setActiveLink(link);
        setVisitedLinks((prevVisitedLinks) => [...prevVisitedLinks, link]);
    };





    return (
        // <div className="nav w-full bg-navClr m-auto flex justify-between fixed z-40 py-8">
        <div className="nav w-full bg-navClr  m-auto flex justify-between fixed z-40 py-5">
            <div className="w-10/12 flex justify-between m-auto">


                <div className="w-7/12 flex">
                    <div className="img w-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="37" viewBox="0 0 120 37" fill="none">
                            <g clipPath="url(#clip0_17_15)">
                                <path d="M13.7375 10.2728C12.2945 9.47595 10.6686 9.06933 9.02037 9.09315H2.47254C2.14588 9.08596 1.82115 9.145 1.51792 9.2667C1.21469 9.38841 0.93925 9.57026 0.708209 9.80131C0.477168 10.0323 0.295312 10.3078 0.173605 10.611C0.0518986 10.9142 -0.0071355 11.239 6.04754e-05 11.5656V33.7327C-0.0269733 34.0739 0.0168855 34.4169 0.128877 34.7403C0.240868 35.0637 0.418568 35.3604 0.6508 35.6118C0.883032 35.8631 1.16477 36.0637 1.47829 36.2009C1.79181 36.3381 2.13032 36.4089 2.47254 36.4089C2.81476 36.4089 3.15328 36.3381 3.4668 36.2009C3.78032 36.0637 4.06206 35.8631 4.29429 35.6118C4.52652 35.3604 4.70422 35.0637 4.81621 34.7403C4.9282 34.4169 4.97206 34.0739 4.94503 33.7327V27.3306H9.02037C10.661 27.3554 12.2809 26.9628 13.7282 26.1897C15.1009 25.4495 16.2372 24.3374 17.0067 22.9809C17.7957 21.564 18.1977 19.9644 18.1724 18.3429C18.1969 16.6838 17.7978 15.0458 17.0129 13.5839C16.2545 12.1939 15.1192 11.0462 13.7375 10.2728ZM13.3577 18.3429C13.3577 19.6249 12.9608 20.6402 12.1455 21.4432C11.3301 22.2462 10.3054 22.6445 9.02037 22.6445H4.94503V13.7777H9.02037C10.2961 13.7777 11.3146 14.1916 12.13 15.0457C12.9453 15.8998 13.3577 16.9881 13.3577 18.3429Z" fill="#F9F9F9" />
                                <path d="M42.6383 10.5348C40.5549 9.36134 38.1646 8.76608 35.5324 8.76608C32.9003 8.76608 30.4759 9.36134 28.3925 10.5348C26.3251 11.6886 24.6271 13.4048 23.4956 15.4844C22.3469 17.5756 21.764 19.9798 21.764 22.6321C21.764 25.2844 22.3469 27.6934 23.4956 29.7954C24.6243 31.8799 26.3227 33.6003 28.3925 34.7559C30.4759 35.9293 32.877 36.5246 35.5324 36.5246C38.1878 36.5246 40.5828 35.9293 42.6554 34.7559C44.7198 33.5938 46.416 31.8749 47.5507 29.7954C48.7118 27.6918 49.2993 25.2813 49.2993 22.6306C49.2993 19.9798 48.7102 17.574 47.5492 15.4798C46.408 13.4038 44.7063 11.6904 42.6383 10.5348ZM35.5278 31.9067C33.9069 31.9295 32.3105 31.5087 30.9115 30.6898C29.5663 29.8928 28.4643 28.7437 27.7244 27.3663C26.9685 25.9005 26.5741 24.2752 26.5741 22.6259C26.5741 20.9767 26.9685 19.3514 27.7244 17.8856C28.4586 16.5146 29.5552 15.3714 30.8944 14.5807C32.311 13.7919 33.9056 13.3779 35.527 13.3779C37.1484 13.3779 38.743 13.7919 40.1596 14.5807C41.4988 15.3715 42.5953 16.5146 43.3297 17.8856C44.0856 19.3514 44.48 20.9767 44.48 22.6259C44.48 24.2752 44.0856 25.9005 43.3297 27.3663C42.5897 28.7437 41.4877 29.8928 40.1426 30.6898C38.744 31.5086 37.1482 31.9294 35.5278 31.9067Z" fill="#F9F9F9" />
                                <path d="M74.173 9.09317C73.8458 9.08535 73.5204 9.14391 73.2165 9.26529C72.9126 9.38668 72.6364 9.56839 72.4046 9.79945C72.1728 10.0305 71.9902 10.3061 71.8679 10.6097C71.7455 10.9133 71.686 11.2384 71.6928 11.5657V20.1922H58.0499V11.5657C58.0755 11.2252 58.0306 10.8832 57.9179 10.561C57.8052 10.2388 57.6272 9.94325 57.395 9.69298C57.1628 9.44271 56.8815 9.24307 56.5686 9.10654C56.2557 8.97001 55.918 8.89954 55.5767 8.89954C55.2353 8.89954 54.8976 8.97001 54.5847 9.10654C54.2718 9.24307 53.9905 9.44271 53.7583 9.69298C53.5262 9.94325 53.3482 10.2388 53.2355 10.561C53.1228 10.8832 53.0778 11.2252 53.1034 11.5657V33.7328C53.0778 34.0732 53.1228 34.4152 53.2355 34.7374C53.3482 35.0597 53.5262 35.3552 53.7583 35.6054C53.9905 35.8557 54.2718 36.0554 54.5847 36.1919C54.8976 36.3284 55.2353 36.3989 55.5767 36.3989C55.918 36.3989 56.2557 36.3284 56.5686 36.1919C56.8815 36.0554 57.1628 35.8557 57.395 35.6054C57.6272 35.3552 57.8052 35.0597 57.9179 34.7374C58.0306 34.4152 58.0755 34.0732 58.0499 33.7328V24.7419H71.699V33.7328C71.699 34.3844 71.9578 35.0093 72.4186 35.4701C72.8794 35.9309 73.5043 36.1897 74.156 36.1897C74.8076 36.1897 75.4325 35.9309 75.8933 35.4701C76.3541 35.0093 76.6129 34.3844 76.6129 33.7328V11.5657C76.6207 11.2385 76.5627 10.913 76.4423 10.6087C76.322 10.3043 76.1417 10.0272 75.9123 9.79384C75.6841 9.56643 75.4126 9.38721 75.1138 9.26684C74.815 9.14647 74.4951 9.08741 74.173 9.09317Z" fill="#F9F9F9" />
                                <path d="M112.752 21.6261C112.772 21.4447 112.798 21.2587 112.827 21.0696C113.384 20.9688 113.82 20.6728 113.973 20.2263C114.167 19.6605 113.858 19.011 113.248 18.5429C113.48 16.7586 113.438 14.8396 112.097 12.9825L120.003 13.5855L102.021 1.64935L80.4836 0L89.6946 6.11533L98.4715 11.9408L108.975 12.7438L109.595 12.7918C106.633 8.89939 100.268 6.41761 100.198 6.38971L100.326 6.09363L100.539 6.18044L100.443 6.19128C100.443 6.19128 112.922 11.096 111.414 17.9275C110.663 17.9275 110.039 18.2545 109.848 18.8095C109.679 19.2978 109.887 19.8496 110.341 20.293C110.279 20.3829 110.217 20.4728 110.15 20.5627C110.15 20.5627 108.318 22.7779 110.226 25.3682C110.226 25.3682 110.756 26.461 112.876 26.2796L114.995 26.0983C114.995 26.0983 112.462 24.1435 112.752 21.6261Z" fill="#1E1E1E" />
                                <path d="M107.714 19.0234C106.923 19.4885 105.841 19.7132 104.407 19.7132C103.992 19.7132 103.555 19.6946 103.1 19.6574C103.325 20.5178 103.437 21.4036 103.434 22.2927C103.455 23.8937 103.072 25.4741 102.319 26.8873C101.771 27.8848 101.027 28.762 100.134 29.4669C99.2398 30.1718 98.2135 30.69 97.1157 30.9908C96.0178 31.2917 94.8707 31.369 93.7424 31.2183C92.6141 31.0675 91.5276 30.6917 90.5472 30.1132C89.2517 29.3312 88.1884 28.2176 87.4671 26.8873C86.7008 25.4775 86.3111 23.894 86.3355 22.2896C86.3134 20.6776 86.7029 19.0866 87.4671 17.667C88.0351 16.6172 88.8172 15.6982 89.7629 14.9698C88.3584 14.0087 87.2733 12.9453 86.8362 11.8431C86.8021 11.7579 86.7742 11.6742 86.7494 11.592C85.3634 12.6393 84.2082 13.9612 83.3561 15.4751C82.2018 17.5131 81.6241 19.7866 81.623 22.2958C81.622 24.8049 82.1594 27.0759 83.2352 29.1087C84.2477 31.0794 85.7797 32.7357 87.6655 33.8986C90.1427 35.4155 93.0857 35.9831 95.9493 35.4962C98.813 35.0094 101.403 33.5012 103.24 31.251V33.0321C103.24 33.3545 103.303 33.6738 103.427 33.9718C103.55 34.2697 103.731 34.5403 103.959 34.7683C104.187 34.9964 104.458 35.1772 104.756 35.3006C105.054 35.424 105.373 35.4875 105.695 35.4875C106.018 35.4875 106.337 35.424 106.635 35.3006C106.933 35.1772 107.204 34.9964 107.432 34.7683C107.66 34.5403 107.84 34.2697 107.964 33.9718C108.087 33.6738 108.151 33.3545 108.151 33.0321V22.2958C108.155 21.1829 108.029 20.0733 107.777 18.9893L107.714 19.0234Z" fill="#F9F9F9" />
                                <path d="M98.4437 12.2741H98.36L94.6102 9.78452L89.5831 6.44705L88.2127 10.4232C88.1279 10.7038 88.1477 11.0056 88.2685 11.2727C88.9149 12.9034 92.3625 15.1294 96.8439 16.6718C101.325 18.2142 105.413 18.577 106.92 17.6872C107.18 17.5519 107.381 17.3257 107.486 17.0516L108.856 13.0693L102.838 12.6042L98.4437 12.2741Z" fill="#1E1E1E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_15">
                                    <rect width="120" height="36.5308" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="Links w-2/3 flex items-center">
                        {/* <nav>
                            <ul className='flex gap-4 font-semibold text-white cursor-pointer'>
                                <li>
                                    <ScrollLink to='home' smooth={true} duration={800}>
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to='overview' smooth={true} duration={800}>
                                        Overview
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to='impact' smooth={true} duration={800}>
                                        Impact
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to='feedback' smooth={true} duration={800}>
                                        Feedback
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to='partners' smooth={true} duration={800}>
                                        Partners
                                    </ScrollLink>
                                </li>
                            </ul>
                        </nav> */}
                        <nav>
                            <ul className='flex gap-4 font-semibold cursor-pointer'>
                                <li>
                                    <ScrollLink
                                        to='home'
                                        smooth={true}
                                        duration={800}
                                        onClick={() => handleClick('home')}
                                        // style={{ color: activeLink === 'home' ? '#3372ac' : 'Lightgrey' }}
                                        style={{
                                            color: activeLink === 'home' ? '#3372ac' : visitedLinks.includes('home') ? 'lightgrey' : 'white',
                                        }}
                                    >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to='overview'
                                        smooth={true}
                                        duration={800}
                                        onClick={() => handleClick('overview')}
                                        // style={{ color: activeLink === 'overview' ? '#3372ac' : 'white' }}
                                        style={{
                                            color: activeLink === 'overview' ? '#3372ac' : visitedLinks.includes('overview') ? 'lightgrey' : 'white',
                                        }}
                                    >
                                        Overview
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to='impact'
                                        smooth={true}
                                        duration={800}
                                        onClick={() => handleClick('impact')}
                                        // style={{ color: activeLink === 'impact' ? '#3372ac' : 'white' }}
                                        style={{
                                            color: activeLink === 'impact' ? '#3372ac' : visitedLinks.includes('impact') ? 'lightgrey' : 'white',
                                        }}
                                    >
                                        Impact
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to='feedback'
                                        smooth={true}
                                        duration={800}
                                        onClick={() => handleClick('feedback')}
                                        // style={{ color: activeLink === 'feedback' ? '#3372ac' : 'white' }}
                                        style={{
                                            color: activeLink === 'feedback' ? '#3372ac' : visitedLinks.includes('feedback') ? 'lightgrey' : 'white',
                                        }}
                                    >
                                        Feedback
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to='partners'
                                        smooth={true}
                                        duration={800}
                                        onClick={() => handleClick('partners')}
                                        // style={{ color: activeLink === 'partners' ? '#3372ac' : 'white' }}
                                        style={{
                                            color: activeLink === 'partners' ? '#3372ac' : visitedLinks.includes('partners') ? 'lightgrey' : 'white',
                                        }}
                                    >
                                        Partners
                                    </ScrollLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="w-5/12 flex items-center justify-end">
                    <div className="button">
                        <ScrollLink to="home" smooth={true} duration={800} className="text-base text-white rounded py-3 px-6 outline-none font-medium cursor-pointer" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        }}>
                            Request a Demo
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>

        // <div className="nav w-10/12 bg-transparent m-auto flex justify-between  z-40 top-5">
        //     <div className="w-7/12 flex items-center">
        //         <div className="img w-1/3">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="120" height="37" viewBox="0 0 120 37" fill="none">
        //                 <g clipPath="url(#clip0_17_15)">
        //                     <path d="M13.7375 10.2728C12.2945 9.47595 10.6686 9.06933 9.02037 9.09315H2.47254C2.14588 9.08596 1.82115 9.145 1.51792 9.2667C1.21469 9.38841 0.93925 9.57026 0.708209 9.80131C0.477168 10.0323 0.295312 10.3078 0.173605 10.611C0.0518986 10.9142 -0.0071355 11.239 6.04754e-05 11.5656V33.7327C-0.0269733 34.0739 0.0168855 34.4169 0.128877 34.7403C0.240868 35.0637 0.418568 35.3604 0.6508 35.6118C0.883032 35.8631 1.16477 36.0637 1.47829 36.2009C1.79181 36.3381 2.13032 36.4089 2.47254 36.4089C2.81476 36.4089 3.15328 36.3381 3.4668 36.2009C3.78032 36.0637 4.06206 35.8631 4.29429 35.6118C4.52652 35.3604 4.70422 35.0637 4.81621 34.7403C4.9282 34.4169 4.97206 34.0739 4.94503 33.7327V27.3306H9.02037C10.661 27.3554 12.2809 26.9628 13.7282 26.1897C15.1009 25.4495 16.2372 24.3374 17.0067 22.9809C17.7957 21.564 18.1977 19.9644 18.1724 18.3429C18.1969 16.6838 17.7978 15.0458 17.0129 13.5839C16.2545 12.1939 15.1192 11.0462 13.7375 10.2728ZM13.3577 18.3429C13.3577 19.6249 12.9608 20.6402 12.1455 21.4432C11.3301 22.2462 10.3054 22.6445 9.02037 22.6445H4.94503V13.7777H9.02037C10.2961 13.7777 11.3146 14.1916 12.13 15.0457C12.9453 15.8998 13.3577 16.9881 13.3577 18.3429Z" fill="#F9F9F9" />
        //                     <path d="M42.6383 10.5348C40.5549 9.36134 38.1646 8.76608 35.5324 8.76608C32.9003 8.76608 30.4759 9.36134 28.3925 10.5348C26.3251 11.6886 24.6271 13.4048 23.4956 15.4844C22.3469 17.5756 21.764 19.9798 21.764 22.6321C21.764 25.2844 22.3469 27.6934 23.4956 29.7954C24.6243 31.8799 26.3227 33.6003 28.3925 34.7559C30.4759 35.9293 32.877 36.5246 35.5324 36.5246C38.1878 36.5246 40.5828 35.9293 42.6554 34.7559C44.7198 33.5938 46.416 31.8749 47.5507 29.7954C48.7118 27.6918 49.2993 25.2813 49.2993 22.6306C49.2993 19.9798 48.7102 17.574 47.5492 15.4798C46.408 13.4038 44.7063 11.6904 42.6383 10.5348ZM35.5278 31.9067C33.9069 31.9295 32.3105 31.5087 30.9115 30.6898C29.5663 29.8928 28.4643 28.7437 27.7244 27.3663C26.9685 25.9005 26.5741 24.2752 26.5741 22.6259C26.5741 20.9767 26.9685 19.3514 27.7244 17.8856C28.4586 16.5146 29.5552 15.3714 30.8944 14.5807C32.311 13.7919 33.9056 13.3779 35.527 13.3779C37.1484 13.3779 38.743 13.7919 40.1596 14.5807C41.4988 15.3715 42.5953 16.5146 43.3297 17.8856C44.0856 19.3514 44.48 20.9767 44.48 22.6259C44.48 24.2752 44.0856 25.9005 43.3297 27.3663C42.5897 28.7437 41.4877 29.8928 40.1426 30.6898C38.744 31.5086 37.1482 31.9294 35.5278 31.9067Z" fill="#F9F9F9" />
        //                     <path d="M74.173 9.09317C73.8458 9.08535 73.5204 9.14391 73.2165 9.26529C72.9126 9.38668 72.6364 9.56839 72.4046 9.79945C72.1728 10.0305 71.9902 10.3061 71.8679 10.6097C71.7455 10.9133 71.686 11.2384 71.6928 11.5657V20.1922H58.0499V11.5657C58.0755 11.2252 58.0306 10.8832 57.9179 10.561C57.8052 10.2388 57.6272 9.94325 57.395 9.69298C57.1628 9.44271 56.8815 9.24307 56.5686 9.10654C56.2557 8.97001 55.918 8.89954 55.5767 8.89954C55.2353 8.89954 54.8976 8.97001 54.5847 9.10654C54.2718 9.24307 53.9905 9.44271 53.7583 9.69298C53.5262 9.94325 53.3482 10.2388 53.2355 10.561C53.1228 10.8832 53.0778 11.2252 53.1034 11.5657V33.7328C53.0778 34.0732 53.1228 34.4152 53.2355 34.7374C53.3482 35.0597 53.5262 35.3552 53.7583 35.6054C53.9905 35.8557 54.2718 36.0554 54.5847 36.1919C54.8976 36.3284 55.2353 36.3989 55.5767 36.3989C55.918 36.3989 56.2557 36.3284 56.5686 36.1919C56.8815 36.0554 57.1628 35.8557 57.395 35.6054C57.6272 35.3552 57.8052 35.0597 57.9179 34.7374C58.0306 34.4152 58.0755 34.0732 58.0499 33.7328V24.7419H71.699V33.7328C71.699 34.3844 71.9578 35.0093 72.4186 35.4701C72.8794 35.9309 73.5043 36.1897 74.156 36.1897C74.8076 36.1897 75.4325 35.9309 75.8933 35.4701C76.3541 35.0093 76.6129 34.3844 76.6129 33.7328V11.5657C76.6207 11.2385 76.5627 10.913 76.4423 10.6087C76.322 10.3043 76.1417 10.0272 75.9123 9.79384C75.6841 9.56643 75.4126 9.38721 75.1138 9.26684C74.815 9.14647 74.4951 9.08741 74.173 9.09317Z" fill="#F9F9F9" />
        //                     <path d="M112.752 21.6261C112.772 21.4447 112.798 21.2587 112.827 21.0696C113.384 20.9688 113.82 20.6728 113.973 20.2263C114.167 19.6605 113.858 19.011 113.248 18.5429C113.48 16.7586 113.438 14.8396 112.097 12.9825L120.003 13.5855L102.021 1.64935L80.4836 0L89.6946 6.11533L98.4715 11.9408L108.975 12.7438L109.595 12.7918C106.633 8.89939 100.268 6.41761 100.198 6.38971L100.326 6.09363L100.539 6.18044L100.443 6.19128C100.443 6.19128 112.922 11.096 111.414 17.9275C110.663 17.9275 110.039 18.2545 109.848 18.8095C109.679 19.2978 109.887 19.8496 110.341 20.293C110.279 20.3829 110.217 20.4728 110.15 20.5627C110.15 20.5627 108.318 22.7779 110.226 25.3682C110.226 25.3682 110.756 26.461 112.876 26.2796L114.995 26.0983C114.995 26.0983 112.462 24.1435 112.752 21.6261Z" fill="#1E1E1E" />
        //                     <path d="M107.714 19.0234C106.923 19.4885 105.841 19.7132 104.407 19.7132C103.992 19.7132 103.555 19.6946 103.1 19.6574C103.325 20.5178 103.437 21.4036 103.434 22.2927C103.455 23.8937 103.072 25.4741 102.319 26.8873C101.771 27.8848 101.027 28.762 100.134 29.4669C99.2398 30.1718 98.2135 30.69 97.1157 30.9908C96.0178 31.2917 94.8707 31.369 93.7424 31.2183C92.6141 31.0675 91.5276 30.6917 90.5472 30.1132C89.2517 29.3312 88.1884 28.2176 87.4671 26.8873C86.7008 25.4775 86.3111 23.894 86.3355 22.2896C86.3134 20.6776 86.7029 19.0866 87.4671 17.667C88.0351 16.6172 88.8172 15.6982 89.7629 14.9698C88.3584 14.0087 87.2733 12.9453 86.8362 11.8431C86.8021 11.7579 86.7742 11.6742 86.7494 11.592C85.3634 12.6393 84.2082 13.9612 83.3561 15.4751C82.2018 17.5131 81.6241 19.7866 81.623 22.2958C81.622 24.8049 82.1594 27.0759 83.2352 29.1087C84.2477 31.0794 85.7797 32.7357 87.6655 33.8986C90.1427 35.4155 93.0857 35.9831 95.9493 35.4962C98.813 35.0094 101.403 33.5012 103.24 31.251V33.0321C103.24 33.3545 103.303 33.6738 103.427 33.9718C103.55 34.2697 103.731 34.5403 103.959 34.7683C104.187 34.9964 104.458 35.1772 104.756 35.3006C105.054 35.424 105.373 35.4875 105.695 35.4875C106.018 35.4875 106.337 35.424 106.635 35.3006C106.933 35.1772 107.204 34.9964 107.432 34.7683C107.66 34.5403 107.84 34.2697 107.964 33.9718C108.087 33.6738 108.151 33.3545 108.151 33.0321V22.2958C108.155 21.1829 108.029 20.0733 107.777 18.9893L107.714 19.0234Z" fill="#F9F9F9" />
        //                     <path d="M98.4437 12.2741H98.36L94.6102 9.78452L89.5831 6.44705L88.2127 10.4232C88.1279 10.7038 88.1477 11.0056 88.2685 11.2727C88.9149 12.9034 92.3625 15.1294 96.8439 16.6718C101.325 18.2142 105.413 18.577 106.92 17.6872C107.18 17.5519 107.381 17.3257 107.486 17.0516L108.856 13.0693L102.838 12.6042L98.4437 12.2741Z" fill="#1E1E1E" />
        //                 </g>
        //                 <defs>
        //                     <clipPath id="clip0_17_15">
        //                         <rect width="120" height="36.5308" fill="white" />
        //                     </clipPath>
        //                 </defs>
        //             </svg>
        //         </div>

        //         <div className="Links w-2/3">
        //             <nav>
        //                 <ul className='flex gap-4'>
        //                     <li>
        //                         <NavLink to="/" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>Home</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/about" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>About</NavLink>
        //                     </li>
        //                     <li>
        //                         <NavLink to="/contact" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>Contact</NavLink>
        //                     </li>
        //                 </ul>
        //             </nav>
        //         </div>
        //     </div>

        //     <div className="w-5/12 flex items-center"> 
        //         <div className="button">Click</div>
        //     </div>
        // </div>

    )
}

export default Header;