import Button from "@/components/button";
import Chat from "@/components/chat";
import Chattext from "@/components/chattext";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="py-15 w-full flex flex-col justify-center min-h-[80vh] items-center text-center gap-12">
        <div className="px-4 container flex flex-col items-center gap-7">
          <h1 className="font-bold text-6xl leading-18 text-black">Stay Ahead of Traffic Congestion</h1>
          <p className="text-2xl w-[1000px] max-w-[80vw] leading-10">Get real-time traffic updates in an instant! With just a few taps, our WhatsApp chatbot keeps you ahead of the road—saving you time and stress on every commute.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#">
              <Button
                fill="blue"
                text="Message Chatbot"
              />
            </Link>
            <Link href="#">
              <Button
                fill="white"
                text="WhatsApp Chat"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center relative pt-16 max-w-[90%] mx-auto">
          <div className="w-[30%] min-w-[100px] -rotate-12">
            <Image
              src="/stuckdemo3.png"
              alt="Stuck Demo 3"
              width={350}
              height={350}
            />
          </div>
          <div className="z-10 w-[30%] min-w-[100px] rotate-6 relative bottom-12 -ml-10">
            <Image
              src="/stuckdemo1.png"
              alt="Stuck Demo 1"
              width={350}
              height={350}
            />
          </div>
          <div className="w-[30%] min-w-[100px] rotate-12 -ml-10">
            <Image
              src="/stuckdemo2.png"
              alt="Stuck Demo 2"
              width={350}
              height={350}
            />
          </div>
          <div className="absolute -bottom-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="287" height="19" viewBox="0 0 287 19" fill="none" className="w-[30vw]">
              <path d="M287 9.5C287 14.7467 222.753 19 143.5 19C64.2471 19 0 14.7467 0 9.5C0 4.25329 64.2471 0 143.5 0C222.753 0 287 4.25329 287 9.5Z" fill="#EBEBEB" />
            </svg>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center">
        <div className="container flex flex-col justify-center gap-9 max-w-[80vw]">
          <p className="tracking-[16px] text-black">Sponsored by</p>
          <div className="flex flex-wrap justify-center md:justify-between gap-16">
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center pt-[130px] px-8 gap-10">
        <div className="container max-w-[1000px]">
          <h1 className="font-bold text-4xl leading-12 text-center">&quot;We keep you from getting <span className="bg-[#DFE6FF] px-4 py-1 rounded-full">stuck in traffic,</span> so you can stay on the move and reach your destination faster.&quot;</h1>
        </div>
        <div className="text-4xl flex flex-col container gap-10 max-w-[1000px]">
          <div className="w-full flex">
            <Chattext
              text="There is no traffic jam on your usual destination today"
              backgroundColor="#ffffff"
            />
          </div>
          <div className="w-full flex justify-end lg:relative lg:bottom-6">
            <Chattext
              text="There is a heavy traffic jam on your usual route today. I would suggest taking an alternate route through mainland, Lagos."
              backgroundColor="#DFE6FF"
              thumb={true}
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center py-[130px] px-8 gap-10">
        <div className="container">
          <h1 className="font-bold text-5xl text-[#3F4AE4] mb-28">How It Works</h1>

          <div className="flex flex-wrap justify-center xl:justify-between gap-28 xl:gap-10">
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Sign Up & Set Your Routes</h1>
              <p className="text-[16px] max-w-[300px]">Create an account and easily add your regular routes to the system.</p>

              <div className="absolute -top-20 h-[140px] w-[140px] flex justify-center items-center bg-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="57" viewBox="0 0 81 57" fill="none">
                  <path d="M13.5 0.274658C10.0522 0.274658 6.74558 1.6443 4.30761 4.08227C1.86964 6.52024 0.5 9.82684 0.5 13.2747V43.2747C0.5 46.7225 1.86964 50.0291 4.30761 52.4671C6.74558 54.905 10.0522 56.2747 13.5 56.2747H67.5C69.2072 56.2747 70.8977 55.9384 72.4749 55.2851C74.0521 54.6318 75.4852 53.6742 76.6924 52.4671C77.8996 51.2599 78.8571 49.8268 79.5104 48.2495C80.1637 46.6723 80.5 44.9818 80.5 43.2747V13.2747C80.5 11.5675 80.1637 9.87701 79.5104 8.29978C78.8571 6.72254 77.8996 5.28943 76.6924 4.08227C75.4852 2.87511 74.0521 1.91754 72.4749 1.26423C70.8977 0.610914 69.2072 0.274658 67.5 0.274658H13.5ZM17.62 21.1547L20.5 24.0347L23.38 21.1547C23.6546 20.8599 23.9859 20.6235 24.3538 20.4595C24.7218 20.2956 25.1191 20.2074 25.5219 20.2003C25.9247 20.1932 26.3248 20.2673 26.6984 20.4182C27.0719 20.5691 27.4113 20.7936 27.6962 21.0785C27.981 21.3634 28.2056 21.7027 28.3565 22.0763C28.5074 22.4498 28.5815 22.8499 28.5744 23.2527C28.5673 23.6556 28.4791 24.0528 28.3151 24.4208C28.1512 24.7888 27.9147 25.12 27.62 25.3947L24.744 28.2747L27.624 31.1467C27.9029 31.4253 28.1242 31.7562 28.2753 32.1204C28.4263 32.4846 28.5042 32.875 28.5044 33.2692C28.5046 33.6635 28.4271 34.054 28.2764 34.4183C28.1257 34.7827 27.9047 35.1137 27.626 35.3927C27.3473 35.6716 27.0165 35.8929 26.6523 36.044C26.2881 36.195 25.8977 36.2729 25.5034 36.273C25.1091 36.2732 24.7187 36.1957 24.3543 36.045C23.99 35.8943 23.6589 35.6733 23.38 35.3947L20.5 32.5147L17.62 35.3947C17.0513 35.9246 16.2991 36.2131 15.5219 36.1994C14.7447 36.1857 14.0032 35.8708 13.4535 35.3211C12.9039 34.7715 12.589 34.03 12.5753 33.2528C12.5616 32.4755 12.8501 31.7234 13.38 31.1547L16.26 28.2747L13.38 25.3947C12.8501 24.826 12.5616 24.0738 12.5753 23.2966C12.589 22.5194 12.9039 21.7778 13.4535 21.2282C14.0032 20.6785 14.7447 20.3637 15.5219 20.35C16.2991 20.3362 17.0513 20.6247 17.62 21.1547ZM39.62 21.1547L42.5 24.0347L45.38 21.1547C45.6546 20.8599 45.9859 20.6235 46.3538 20.4595C46.7218 20.2956 47.1191 20.2074 47.5219 20.2003C47.9247 20.1932 48.3248 20.2673 48.6984 20.4182C49.0719 20.5691 49.4113 20.7936 49.6962 21.0785C49.981 21.3634 50.2056 21.7027 50.3565 22.0763C50.5074 22.4498 50.5815 22.8499 50.5744 23.2527C50.5673 23.6556 50.4791 24.0528 50.3151 24.4208C50.1512 24.7888 49.9147 25.12 49.62 25.3947L46.744 28.2747L49.624 31.1467C50.1868 31.7095 50.503 32.4728 50.503 33.2687C50.503 34.0646 50.1868 34.8279 49.624 35.3907C49.0612 35.9535 48.2979 36.2696 47.502 36.2696C46.7061 36.2696 45.9428 35.9535 45.38 35.3907L42.5 32.5147L39.62 35.3947C39.3454 35.6894 39.0141 35.9258 38.6462 36.0898C38.2782 36.2538 37.8809 36.3419 37.4781 36.349C37.0753 36.3561 36.6752 36.282 36.3016 36.1312C35.9281 35.9803 35.5887 35.7557 35.3038 35.4708C35.019 35.1859 34.7944 34.8466 34.6435 34.4731C34.4926 34.0995 34.4185 33.6994 34.4256 33.2966C34.4327 32.8938 34.5209 32.4965 34.6849 32.1285C34.8488 31.7605 35.0853 31.4293 35.38 31.1547L38.26 28.2747L35.38 25.3947C34.8501 24.826 34.5616 24.0738 34.5753 23.2966C34.589 22.5194 34.9039 21.7778 35.4535 21.2282C36.0032 20.6785 36.7447 20.3637 37.5219 20.35C38.2991 20.3362 39.0513 20.6247 39.62 21.1547ZM55.5 33.2747C55.5 32.479 55.8161 31.716 56.3787 31.1533C56.9413 30.5907 57.7044 30.2747 58.5 30.2747H65.5C66.2956 30.2747 67.0587 30.5907 67.6213 31.1533C68.1839 31.716 68.5 32.479 68.5 33.2747C68.5 34.0703 68.1839 34.8334 67.6213 35.396C67.0587 35.9586 66.2956 36.2747 65.5 36.2747H58.5C57.7044 36.2747 56.9413 35.9586 56.3787 35.396C55.8161 34.8334 55.5 34.0703 55.5 33.2747Z" fill="#3F4AE4" />
                </svg>
              </div>
            </div>
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Connect with Our WhatsApp Chatbot</h1>
              <p className="text-[16px] max-w-[300px]">Start a conversation with our WhatsApp chatbot—just a few clicks and you’re all set!</p>
              <div className="absolute -top-20 h-[140px] w-[140px] flex justify-center items-center bg-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                  <path d="M75.9892 36.0192V24.1209C75.9892 21.9995 75.1464 19.9649 73.6464 18.4649C72.1463 16.9648 70.1118 16.122 67.9903 16.122H43.9937V10.8748C45.2136 9.77895 45.9935 8.20317 45.9935 6.43542C45.9935 4.84435 45.3614 3.31845 44.2363 2.19339C43.1113 1.06833 41.5854 0.436279 39.9943 0.436279C38.4032 0.436279 36.8773 1.06833 35.7523 2.19339C34.6272 3.31845 33.9952 4.84435 33.9952 6.43542C33.9952 8.20317 34.775 9.77895 35.9949 10.8748V16.122H11.9983C9.87686 16.122 7.84232 16.9648 6.34224 18.4649C4.84217 19.9649 3.99943 21.9995 3.99943 24.1209V36.1112L3.71147 36.1312C2.70351 36.204 1.76046 36.6556 1.07192 37.3953C0.38338 38.1351 0.000408922 39.108 0 40.1186V48.1175C0 49.1782 0.421367 50.1955 1.17141 50.9455C1.92144 51.6956 2.93872 52.1169 3.99943 52.1169V72.1141C3.99943 74.2355 4.84217 76.27 6.34224 77.7701C7.84232 79.2702 9.87686 80.1129 11.9983 80.1129H67.9903C70.1118 80.1129 72.1463 79.2702 73.6464 77.7701C75.1464 76.27 75.9892 74.2355 75.9892 72.1141V52.1169C77.0499 52.1169 78.0672 51.6956 78.8172 50.9455C79.5672 50.1955 79.9886 49.1782 79.9886 48.1175V40.3666C80.0356 39.7459 79.9369 39.1228 79.7007 38.5469C78.8928 36.5951 77.161 36.1272 75.9892 36.0192ZM19.9972 40.1186C19.9972 35.7033 22.6848 32.1198 25.9963 32.1198C29.3078 32.1198 31.9954 35.7033 31.9954 40.1186C31.9954 44.534 29.3078 48.1175 25.9963 48.1175C22.6848 48.1175 19.9972 44.534 19.9972 40.1186ZM55.984 64.1152C51.9806 64.1032 23.9966 64.1152 23.9966 64.1152V56.1163C23.9966 56.1163 51.9966 56.1084 56 56.1163L55.984 64.1152ZM53.9923 48.1175C50.6808 48.1175 47.9932 44.534 47.9932 40.1186C47.9932 35.7033 50.6808 32.1198 53.9923 32.1198C57.3038 32.1198 59.9915 35.7033 59.9915 40.1186C59.9915 44.534 57.3038 48.1175 53.9923 48.1175Z" fill="#3F4AE4" />
                </svg>
              </div>
            </div>
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Plan Smarter, Commute Better</h1>
              <p className="text-[16px] max-w-[300px]">Enjoy a more efficient commute, with real-time insights to keep you ahead of the traffic.</p>
              <div className="absolute -top-20 h-[140px] w-[140px] flex justify-center items-center bg-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64" fill="none">
                  <path d="M66.7453 26.6264C64.078 12.0098 51.3178 0.927979 35.9383 0.927979V12.2302C41.2521 12.2377 46.3462 14.3519 50.1036 18.1094C53.8611 21.8668 55.9753 26.9609 55.9828 32.2747C55.9738 37.5871 53.8593 42.6793 50.1026 46.4354C46.3459 50.1916 41.2535 52.3053 35.9411 52.3136V63.6214C51.3178 63.6101 64.0836 52.5283 66.7481 37.9202H80V26.6179H66.7481L66.7453 26.6264ZM53.5076 32.2775C53.512 28.1131 52.0365 24.0826 49.3444 20.9052C46.6523 17.7279 42.9189 15.6105 38.8102 14.9308C34.7016 14.2512 30.4852 15.0536 26.9133 17.1948C23.3415 19.336 20.6467 22.6767 19.3099 26.6208H0V37.923H19.3099C20.6451 41.8687 23.3391 45.2113 26.9111 47.3543C30.483 49.4972 34.7003 50.3008 38.8101 49.6218C42.9198 48.9427 46.6544 46.8251 49.3471 43.647C52.0399 40.469 53.5154 36.4373 53.5104 32.2719L53.5076 32.2775Z" fill="#3F4AE4" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full flex justify-center px-10 relative -bottom-12">
        <div className="flex flex-wrap justify-center lg:justify-between text-center lg:text-start items-center container bg-[#3F4AE4] gap-10 px-8 lg:px-28 py-16 text-white rounded-[40px]">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <h1 className="text-5xl font-medium w-[80%] leading-14">Changing the narrative on the road</h1>
            <p className="text-2xl">Helping road users reduce stress and fear of traffic congestion</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#">
                <Button
                  fill="white"
                  text="Message Chatbot"
                />
              </Link>
              <Link href="#">
                <Button
                  fill="white"
                  text="WhatsApp Chat"
                />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/robot.png"
              alt="WeThink Traffic AI Bot"
              width={290}
              height={430}
            />
          </div>
        </div>
      </section>

      <Footer />
      <Chat />
    </>
  );
}