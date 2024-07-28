import '../../../css/client/project.css';
import '../../../css/hover.css';
import '../../../css/laptop.css';
import {Link as Scroll} from 'react-scroll';

const Project = () => {
    return (
        <div className="projects flex-container-project em-02">
            <div className='flex-direction-column'>
                <img className='project' id='company-1' alt='company icon' src='./client/company1.svg'/>
                <Scroll to='anketa' spy={true} smooth={true}>
                    <div className='project-add project'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.7799 10.42L33.5999 16.06C33.9799 16.84 34.9999 17.58 35.8599 17.74L40.9599 18.58C44.2199 19.12 44.9799 21.48 42.6399 23.84L38.6599 27.82C37.9999 28.48 37.6199 29.78 37.8399 30.72L38.9799 35.64C39.8799 39.52 37.7999 41.04 34.3799 39L29.5999 36.16C28.7399 35.64 27.2999 35.64 26.4399 36.16L21.6599 39C18.2399 41.02 16.1599 39.52 17.0599 35.64L18.1999 30.72C18.4199 29.8 18.0399 28.5 17.3799 27.82L13.3999 23.84C11.0599 21.5 11.8199 19.14 15.0799 18.58L20.1799 17.74C21.0399 17.6 22.0599 16.84 22.4399 16.06L25.2599 10.42C26.7599 7.36 29.2399 7.36 30.7799 10.42Z" stroke="#338DDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 10H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 38H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 24H4" stroke="#7DE2B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className='add-my-company Montserrat-500'>Add my company</div>
                    </div>
                </Scroll>
                <div className='project' id='company-2'>
                <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="204" height="204" fill="#F8FBFF"/>
                <path d="M42.9181 105.286C41.6465 105.286 40.6053 104.937 39.7946 104.237C38.984 103.522 38.5786 102.529 38.5786 101.257C38.5786 99.9535 39.0316 98.9521 39.9377 98.2527C40.8437 97.5533 42.0756 97.2036 43.6334 97.2036C44.762 97.2036 45.7952 97.3705 46.733 97.7043V97.4897C46.733 96.0909 45.8747 95.3915 44.158 95.3915C42.9976 95.3915 41.8134 95.6299 40.6053 96.1068L39.6754 92.9118C41.2968 92.2442 43.0373 91.9104 44.8971 91.9104C47.1225 91.9104 48.7597 92.4349 49.8088 93.484C50.7308 94.3901 51.1917 95.7571 51.1917 97.5851V105H46.7092V103.665C45.7396 104.746 44.4759 105.286 42.9181 105.286ZM44.5394 102.449C45.2071 102.449 45.7475 102.258 46.1608 101.877C46.5741 101.479 46.7807 100.963 46.7807 100.327V99.731C46.2562 99.5084 45.668 99.3972 45.0163 99.3972C44.3646 99.3972 43.8559 99.5482 43.4903 99.8502C43.1247 100.136 42.9419 100.534 42.9419 101.042C42.9419 101.472 43.085 101.813 43.3711 102.068C43.6731 102.322 44.0626 102.449 44.5394 102.449Z" fill="black"/>
                <path d="M60.6726 105.31C58.7493 105.31 57.1438 104.659 55.8563 103.355C54.5687 102.036 53.925 100.438 53.925 98.5627C53.925 96.7029 54.5767 95.1213 55.8801 93.8178C57.1836 92.4985 58.8367 91.8388 60.8395 91.8388C63.3034 91.8388 65.1393 92.8005 66.3473 94.7239L63.3192 96.9175C62.7152 96.075 61.9363 95.6538 60.9826 95.6538C60.1719 95.6538 59.5282 95.9319 59.0513 96.4883C58.5744 97.0446 58.336 97.7361 58.336 98.5627C58.336 99.4051 58.5744 100.105 59.0513 100.661C59.5282 101.217 60.1481 101.495 60.9111 101.495C61.4197 101.495 61.8489 101.384 62.1986 101.162C62.5642 100.939 62.9457 100.597 63.3431 100.136L66.4189 102.354C65.0837 104.325 63.1682 105.31 60.6726 105.31Z" fill="black"/>
                <path d="M75.0189 105.31C72.9842 105.31 71.3232 104.69 70.0356 103.451C68.7481 102.211 68.1043 100.581 68.1043 98.5627C68.1043 96.6552 68.7163 95.0577 69.9402 93.7702C71.1642 92.4667 72.722 91.815 74.6135 91.815C76.7276 91.815 78.341 92.4826 79.4537 93.8178C80.5664 95.1531 81.1228 96.838 81.1228 98.8726C81.1228 99.2859 81.1148 99.5959 81.0989 99.8025H72.4676C72.8332 101.217 73.7631 101.925 75.2573 101.925C76.2746 101.925 77.2284 101.487 78.1185 100.613L80.6221 102.688C79.2391 104.436 77.3714 105.31 75.0189 105.31ZM72.3961 97.4897H76.8787C76.7992 96.7744 76.5607 96.2101 76.1634 95.7968C75.766 95.3677 75.2573 95.1531 74.6374 95.1531C74.0492 95.1531 73.5565 95.3677 73.1591 95.7968C72.7776 96.2101 72.5233 96.7744 72.3961 97.4897Z" fill="black"/>
                <path d="M92.4834 105.286C90.9256 105.286 89.6142 104.667 88.5492 103.427V105H84.019V87.5947H88.5492V93.8178C89.646 92.4826 90.9495 91.815 92.4595 91.815C94.0491 91.815 95.4002 92.4349 96.5129 93.6748C97.6256 94.8987 98.1819 96.5201 98.1819 98.5388C98.1819 100.573 97.6256 102.211 96.5129 103.451C95.4161 104.675 94.0729 105.286 92.4834 105.286ZM91.0766 101.495C91.8237 101.495 92.4516 101.217 92.9602 100.661C93.4689 100.105 93.7232 99.3892 93.7232 98.515C93.7232 97.6725 93.4689 96.9811 92.9602 96.4406C92.4516 95.8843 91.8237 95.6061 91.0766 95.6061C90.3454 95.6061 89.7255 95.8843 89.2168 96.4406C88.7082 96.997 88.4539 97.7043 88.4539 98.5627C88.4539 99.4051 88.7082 100.105 89.2168 100.661C89.7255 101.217 90.3454 101.495 91.0766 101.495Z" fill="black"/>
                <path d="M105.377 105.286C104.01 105.286 102.937 104.865 102.159 104.023C101.38 103.18 100.99 102.02 100.99 100.542V92.1011H105.52V99.0872C105.52 99.7707 105.687 100.303 106.021 100.685C106.355 101.066 106.8 101.257 107.356 101.257C107.913 101.257 108.366 101.066 108.715 100.685C109.065 100.303 109.24 99.7707 109.24 99.0872V92.1011H113.77V105H109.24V103.236C108.175 104.603 106.887 105.286 105.377 105.286Z" fill="black"/>
                <path d="M122.373 105.286C120.783 105.286 119.432 104.675 118.319 103.451C117.223 102.211 116.674 100.581 116.674 98.5627C116.674 96.528 117.223 94.8987 118.319 93.6748C119.416 92.4349 120.759 91.815 122.349 91.815C123.907 91.815 125.226 92.4349 126.307 93.6748V87.5947H130.837V105H126.307V103.284C125.21 104.619 123.899 105.286 122.373 105.286ZM121.872 100.661C122.397 101.217 123.024 101.495 123.756 101.495C124.487 101.495 125.107 101.217 125.615 100.661C126.124 100.105 126.378 99.3892 126.378 98.515C126.378 97.6725 126.124 96.9811 125.615 96.4406C125.107 95.8843 124.487 95.6061 123.756 95.6061C123.009 95.6061 122.381 95.8843 121.872 96.4406C121.363 96.997 121.109 97.7043 121.109 98.5627C121.109 99.4051 121.363 100.105 121.872 100.661Z" fill="black"/>
                <path d="M139.439 105.286C137.85 105.286 136.499 104.675 135.386 103.451C134.289 102.211 133.741 100.581 133.741 98.5627C133.741 96.528 134.289 94.8987 135.386 93.6748C136.483 92.4349 137.826 91.815 139.415 91.815C140.973 91.815 142.293 92.4349 143.373 93.6748V87.5947H147.904V105H143.373V103.284C142.277 104.619 140.965 105.286 139.439 105.286ZM138.939 100.661C139.463 101.217 140.091 101.495 140.822 101.495C141.553 101.495 142.173 101.217 142.682 100.661C143.191 100.105 143.445 99.3892 143.445 98.515C143.445 97.6725 143.191 96.9811 142.682 96.4406C142.173 95.8843 141.553 95.6061 140.822 95.6061C140.075 95.6061 139.447 95.8843 138.939 96.4406C138.43 96.997 138.176 97.7043 138.176 98.5627C138.176 99.4051 138.43 100.105 138.939 100.661Z" fill="black"/>
                <path d="M155.099 108.887C153.669 108.887 152.286 108.513 150.95 107.766L152.357 104.595C153.12 105.056 153.78 105.286 154.336 105.286C154.781 105.286 155.131 105.112 155.385 104.762L150.33 92.1011H155.075L157.65 99.874L160.082 92.1011H164.732L160.011 104.69C159.439 106.216 158.795 107.297 158.08 107.933C157.364 108.569 156.371 108.887 155.099 108.887Z" fill="black"/>
                <path d="M72.1306 115.762L70.1415 110.241H70.5957L72.3186 115.12L73.924 110.226H74.2372L75.8426 115.12L77.5654 110.241H77.9883L75.9992 115.762H75.6703L74.0649 111.001L72.4595 115.762H72.1306Z" fill="black"/>
                <path d="M91.2418 114.979C90.7249 115.538 90.0619 115.817 89.2527 115.817C88.4434 115.817 87.783 115.541 87.2714 114.987C86.7598 114.429 86.5039 113.76 86.5039 112.982C86.5039 112.21 86.7624 111.544 87.2792 110.985C87.7961 110.427 88.4591 110.148 89.2683 110.148C90.0775 110.148 90.738 110.427 91.2496 110.985C91.7612 111.539 92.0171 112.204 92.0171 112.982C92.0171 113.755 91.7586 114.421 91.2418 114.979ZM87.5925 114.729C88.0415 115.209 88.6001 115.449 89.2683 115.449C89.9366 115.449 90.49 115.212 90.9285 114.737C91.3723 114.261 91.5942 113.677 91.5942 112.982C91.5942 112.298 91.3697 111.716 90.9207 111.236C90.4769 110.756 89.9209 110.516 89.2527 110.516C88.5844 110.516 88.0284 110.753 87.5846 111.228C87.1461 111.703 86.9268 112.288 86.9268 112.982C86.9268 113.666 87.1487 114.248 87.5925 114.729Z" fill="black"/>
                <path d="M101.231 115.723V110.241H103.534C104.202 110.241 104.716 110.422 105.076 110.782C105.353 111.059 105.491 111.403 105.491 111.816C105.491 112.259 105.345 112.614 105.053 112.881C104.76 113.147 104.372 113.314 103.886 113.382L105.695 115.723H105.178L103.432 113.452H101.638V115.723H101.231ZM101.638 113.084H103.487C103.956 113.084 104.34 112.972 104.638 112.747C104.935 112.518 105.084 112.207 105.084 111.816C105.084 111.445 104.946 111.153 104.669 110.938C104.392 110.724 104.006 110.617 103.51 110.617H101.638V113.084Z" fill="black"/>
                <path d="M114.722 115.723V110.241H115.129V115.347H118.347V115.723H114.722Z" fill="black"/>
                <path d="M127.401 115.723V110.241H129.226C130.082 110.241 130.782 110.503 131.325 111.025C131.868 111.541 132.139 112.194 132.139 112.982C132.139 113.765 131.865 114.418 131.317 114.94C130.774 115.462 130.077 115.723 129.226 115.723H127.401ZM127.808 115.347H129.226C129.972 115.347 130.573 115.123 131.027 114.674C131.487 114.225 131.716 113.661 131.716 112.982C131.716 112.314 131.487 111.753 131.027 111.299C130.573 110.844 129.972 110.617 129.226 110.617H127.808V115.347Z" fill="black"/>
                </svg>
                </div>
            </div>
            <div className='flex-direction-column'>
                <img className='project' id='company-3' alt='company icon' src='./client/company3.svg'/>
                <img className='project' id='company-4' alt='company icon' src='./client/company4.svg'/>
                <img className='project' id='company-5' alt='company icon' src='./client/company5.svg'/>
                <img className='project' id='company-6' alt='company icon' src='./client/company6.svg'/>
            </div>
            <div className='flex-direction-column flex-direction-column-3'>
                <img className='project' id='company-7' alt='company icon' src='./client/company7.svg'/>
                <img className='project' id='company-8' alt='company icon' src='./client/company8.svg'/>
                <img className='project' id='company-9' alt='company icon' src='./client/company9.svg'/>
                <img className='project' id='company-10' alt='company icon' src='./client/company10.svg'/>
                <img className='project' id='company-11' alt='company icon' src='./client/company11.svg'/>
            </div>
        </div>
    )
}

export default Project;
