import Logo from "./../../assets/icons/2nd-logo.png";
type Props = {};

const AppFooter = (props: Props) => {
return (
<div className=" mx-auto max-w-7xl bg-[#676b6a] py-6 text-stone-50 shadow-xl">

    <div
        className="mx-auto mb-14 grid max-w-6xl scroll-py-12 grid-cols-1 gap-y-10 px-2  sm:grid-cols-2 md:grid-cols-3 md:gap-y-0">
        <div className="flex flex-col gap-2 ">
            <h2 className=" mb-2 font-semibold capitalize sm:mb-6">Contact</h2>
            <a className="text-xs " href="tel:+974 4415 3624">+974 4415 3624</a><a className="text-xs "
                href="tel:+974 5092 8244">
                +974 5092 8244</a><a className="text-xs "
                href="mailto:streaming@beyondsports.live">streaming@beyondsports.live</a>
        </div>
        <div className="flex flex-col gap-2 ">
            <h2 className=" mb-2 font-semibold capitalize sm:mb-6">Visit us</h2>
            <h3 className="text-xs font-semibold ">Head Office Qatar</h3>
            <p className="text-xs ">Office No. 301, 3rd Floor Al-Mana Plaza,</p>
            <p className="text-xs ">Fereej Bin Mahmoud Doha Qatar</p>
        </div>
        <div className=" flex items-start gap-2  md:ml-auto "><a target="_blank"
                href="https://www.facebook.com/BeyondPerspectiveLIVE"
                className="rounded-full bg-stone-500 shadow-xl  duration-300 hover:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    className="h-9 w-9 rounded-full bg-inherit fill-white p-2 transition-all  " viewBox="0 0 30 30">
                    <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
                    </path>
                </svg></a><a target="_blank" href="https://www.instagram.com/beyondsports.live/"
                className="rounded-full bg-stone-500 shadow-xl duration-300 hover:scale-90"> <svg
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"
                    className="h-9 w-9 rounded-full bg-inherit fill-white p-2 transition-all  ">
                    <path
                        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z">
                    </path>
                </svg></a><a target="_blank" href="https://www.youtube.com/@BeyondSportsLive"
                className="rounded-full bg-stone-500 shadow-xl duration-300 hover:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    className="h-9 w-9 rounded-full bg-inherit fill-white p-2 transition-all  " viewBox="0 0 30 30">
                    <path
                        d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
                    </path>
                </svg></a></div>
    </div>
    <div className=" mx-auto max-w-6xl px-2">
        <div className=" flex items-center justify-between">
            <p className=" text-sm  font-semibold leading-5">© 2024 Beyond Sports; division of Beyond Perspective</p><a
                className=" text-sm font-normal uppercase underline hover:no-underline
          " href="https://aizykhan.netlify.app/">developer</a>
        </div>
    </div>
</div>
);
};

export default AppFooter;