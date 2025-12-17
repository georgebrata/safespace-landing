export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white">
        Culori
      </h3>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">
          <span className="font-semibold text-lg dark:text-white">
            1. Suprascrie culorile
          </span>
          <br />
          Pentru orice schimbare de culori: /src/utils/extendedConfig.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>primary: "#2F73F2",</span>
            <span>danger: "#DC3545",</span>
            <span>danger_text: "#FF3C78",</span>
            <span>green: "#3CD278",</span>
            <span>grey: "#8E8E8E",</span>
            <span>muted: "#547593",</span>
            <span>midnight_text: "#102D47",</span>
            <span>border: "#DFEBFC",</span>
            <span>darkmode: "#08162B",</span>
            <span>heroBg: "#F3F9FD",</span>
            <span>darkHeroBg: "#121C2E",</span>
            <span>darkheader: "#141D2F",</span>
            <span>dark_border: "#253C50",</span>
            <span>foottext: "#668199",</span>
            <span>search: "#163858",</span>
            <span>dark_b: "#1B2C44",</span>
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">
          <span className="font-semibold text-lg dark:text-white">
            2. Suprascrie culorile temei
          </span>
          <br />
          Pentru modificare, mergi la: /src/utils/extendedConfig.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>primary: "#2F73F2",</span>
            <span>darkmode: "#08162B",</span>
          </p>
        </div>
      </div>
    </>
  );
};
