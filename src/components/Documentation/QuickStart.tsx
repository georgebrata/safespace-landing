export const QuickStart = () => {
    return (
        <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start" >
          <h3 className=" text-black text-2xl font-semibold mt-8 dark:text-white" >Pornire rapidă</h3>
          <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
             <h6 className="dark:text-white text-lg font-medium">1. Cerințe</h6>
             <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">Înainte de a continua, ai nevoie de cea mai recentă versiune stabilă de <a href="https://nodejs.org/" className="text-primary" >node.js</a>.</p>
              <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">Mediu recomandat:</h6>
              <ul className="list-disc ps-6" >
                <li>node js 20+</li>
                <li>npm js 10+</li>
              </ul>
          </div>
          <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
             <h6 className="dark:text-white text-lg font-medium">2. Instalare</h6>
             <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50">Deschide folderul proiectului și instalează dependențele. Recomandăm yarn sau npm.</p>
              <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">1) Instalare cu npm:</h6>
              <div className="py-4 px-3 rounded-md bg-black">
                <p className="text-sm text-gray-400"><span className="text-yellow-500">cd</span> folder-proiect</p>
                <p className="text-sm text-gray-400 mt-2">npm install</p>
              </div>
              <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">2) Instalare cu yarn:</h6>
              <div className="py-4 px-3 rounded-md bg-black">
                <p className="text-sm text-gray-400"><span className="text-yellow-500">cd</span> folder-proiect</p>
                <p className="text-sm text-gray-400 mt-2">yarn install</p>
              </div>
          </div>
          <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
             <h6 className="dark:text-white text-lg font-medium">3. Pornire</h6>
             <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4">După ce instalarea s-a terminat, poți porni aplicația.</p>

              <div className="py-4 px-3 rounded-md bg-black">
                <p className="text-sm text-gray-400">npm run dev or yarn run dev</p>
              </div>
              <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 my-4">Această comandă pornește un server local la <span className="dark:text-white" >http://localhost:3000</span>.</p>
              <div className="py-4 px-3 rounded-md bg-black">
                <p className="text-sm text-gray-400">{"> safespace_landing@1.0.1 dev"}</p>
                <p className="text-sm text-gray-400 mt-1">{"> next dev"}</p>
                <p className="text-sm text-gray-400 mt-6">{"-Next.js 15.1.1"}</p>
                <p className="text-sm text-gray-400 mt-1">{"-Local: http://localhost:3000"}</p>
              </div>
          </div>
          <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
             <h6 className="dark:text-white text-lg font-medium">4. Build / Deploy</h6>
             <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4">După ce ai configurat aplicația, rulează comanda de build.</p>

              <div className="py-4 px-3 rounded-md bg-black">
                <p className="text-sm text-gray-400">npm run build or yarn build</p>
              </div>
              <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mt-6">Gata — site-ul este pregătit pentru publicare.</p>
          </div>
        </div>
    )
}