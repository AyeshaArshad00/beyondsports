import Logo from "./../../assets/icons/2nd-logo.png";
type Props = {};

const AppHeader = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white p-4 flex items-center gap-3 divide-x text-sm text-gray-500">
        <div>OUR GROUPS</div>
        <div className="pl-2">BEYOND PERSPECTIVE</div>
        <div className="pl-2">BEYOND SPORTS</div>
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <img className="w-[200px]" src={Logo} alt="logo" />
        </div>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 uppercase tracking-[.5em]">
            Livestrem
          </button>
          <button className="rounded-[50%] bg-gray-600 h-10 w-10 text-white">
            f
          </button>
          <button className="rounded-[50%] bg-gray-600 h-10 w-10 text-white">
            I
          </button>
          <button className="rounded-[50%] bg-gray-600 h-10 w-10 text-white">
            Y
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
