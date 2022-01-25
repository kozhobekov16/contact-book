//Content component contains of data to output them
import React from "react";
//modal Windows for read more about contact
import ModalWindowForAccountHistory from "../UI/modalWindowForAccountHistory/ModalWindowForAccountHistory";
import ModalWindowForAdress from "../UI/modalWindowForAdress/ModalWindowForAdress";
//Here i connected icons
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import SearchBar from "../search_bar/SearchBar";
//Bootstrap spinners
import { Spinner } from "react-bootstrap";
const Content = () => {
  //here i use React hooks for data, input-value and loader
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [loader, setLoadaer] = React.useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    //async await and fetch for get all data about contacts
    async function fetchData() {
      try {
        const datas = await fetch(`https://demo.sibers.com/users`);
        const response = await datas.json();
        setData(response);
        //localStorage for storage datas
        localStorage.setItem("data", JSON.stringify(data));
        setLoadaer(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [data]);

  const clearInput = () => {
    return setValue("");
  };

  return (
    <div className="rounded-lg mt-8 p-4 shadow-lg md:shadow-cyan-900/1">
      <SearchBar
        value={value}
        handleChange={handleChange}
        clearInput={clearInput}
      />
      <div>
        {/* Preloader */}
        {loader === false ? (
          <div className="text-center mt-6">
            <Spinner animation="border text-xl" variant="primary" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-between gap-1">
            {/* search by contact names */}
            {data
              .filter((search) => {
                if (value === "") {
                  return search;
                } else if (
                  search.name.toLowerCase().includes(value) ||
                  search.name.toUpperCase().includes(value)
                ) {
                  return search;
                }
              })
              // method array - Map for enumeration arrays
              .map((elem) => {
                return (
                  <section
                    key={elem.id}
                    className="text-slate-300 title bg-cyan-900 mt-2 p-4 rounded-lg drop-shadow-lg bg-inherit shadow md:shadow-2xl"
                    style={{ width: "32.34%" }}
                  >
                    <article className="flex items-center">
                      <FaUserCircle className="text-2xl text-cyan-400" />
                      <h1 className="font-semibold text-2xl pl-1 divide-solid">
                        {elem.name}
                      </h1>
                    </article>
                    <div className="flex">
                      <ul className="p-0">
                        <li className="flex items-center">
                          Company
                          <span>
                            <FaUniversity />
                          </span>
                          : {elem.company.name}
                        </li>
                        <li>
                          <span>Position:</span> {elem.company.bs}
                        </li>
                        <li>
                          <span>
                            website:
                            <a
                              target="_blank"
                              className="underline pl-1 text-blue-200"
                              rel="noreferrer"
                              href={`https://${elem.website}`}
                            >
                              {elem.website}
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h6>Phone: {elem.phone}</h6>
                    <h6>E-mail: {elem.email}</h6>
                    <div className="flex gap-4">
                      {/* here components for Modal window */}
                      <ModalWindowForAdress adressElem={elem} />
                      <ModalWindowForAccountHistory accountHistory={elem} />
                      {/* <ModalForEdit editContact={elem}/> */}
                    </div>
                  </section>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
