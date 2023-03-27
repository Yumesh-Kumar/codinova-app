import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({ name: "", prev: 0, next: 0, pageNumber: 1, limit: 10, currentPage: 1 });
  const [activeBtn, setActiveBtn] = useState({ prev: false, next: false });
  const [exchanges, setExchanges] = useState([]);
  const syncExchangeData = async () => {
    try {
      setLoading(true)
      fetch("https://codinova-db.onrender.com/api/v1/user/exchange-sync")
      .then((response)=>{
        if(response.status===200){
          return response.json()
        }else{
          alert("Something went wrong")
        }
      })
      .then((data)=>{
        alert(data.message)
        setLoading(false)
      })
      .catch((error)=>{
        console.log('error', error)
        setLoading(false)
      })

    } catch (error) {}
  };

  useEffect(() => {
    fetch(
      `https://codinova-db.onrender.com/api/v1/user/exchange-list?name=${params.name}&pageNumber=${params.pageNumber}&limit=${params.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setExchanges(data.data);
        setParams((pre) => {
          return { ...pre, next: data.next, prev: data.prev, limit: data.limit, currentPage: data.currentPage };
        });
      })
      .catch((err) => {
        console.log("err", err);
        setExchanges([]);
      });
  }, [params.name]);

  const handlePage = (type = "", page) => {
    if(page<=0){
      alert("No previous page found")
      return
    }
    if (type === "prev") {
      setActiveBtn({ prev: true, next: false });
      fetch(
        `https://codinova-db.onrender.com/api/v1/user/exchange-list?name=${params.name}&pageNumber=${page}&limit=${params.limit}`
      )
        .then((response) => response.json())
        .then((data) => {
          setExchanges(data.data);
          setParams((pre) => {
            return { ...pre, next: data.next, prev: data.prev, limit: data.limit, currentPage: data.currentPage };
          });
        })
        .catch((err) => {
          console.log("err", err);
          setExchanges([]);
        });
    } else if (type === "next") {
      setActiveBtn({ next: true, prev: false });
      fetch(
        `https://codinova-db.onrender.com/api/v1/user/exchange-list?name=${params.name}&pageNumber=${page}&limit=${params.limit}`
      )
        .then((response) => response.json())
        .then((data) => {
          setExchanges(data.data);
          setParams((pre) => {
            return { ...pre, next: data.next, prev: data.prev, limit: data.limit, currentPage: data.currentPage };
          });
        })
        .catch((err) => {
          console.log("err", err);
          setExchanges([]);
        });
    } else {
      alert("incorrect page number");
    }
  };

  const Loader = () =>{
   return(
     <div style={{ height:"100%", width:"100%", zIndex:999, backgroundColor:"#0001", position:"absolute", textAlign:"center" }} >
      <p>Loading....data is syncing</p>
    </div>
    )
  }

if(loading)  return <Loader/>

  return (
    <div className="App">
      <h2>Top crypto exchanges</h2>
      <h4 style={{ color: "#0009" }}>Compare all 190 top crypto exchanges. The list is ranked by trading volume</h4>
      <div style={{ borderBottom: "2px solid blue", width: "fit-content", display: "inline-flex" }}>
        <strong style={{ color: "blue", padding: "10px" }}> Exchanges</strong>
      </div>
      <p style={{ backgroundColor: "lightblue", height: "1px", margin: 0 }}></p>
      <main>
        <section id="search">
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-evenly",
              border: "1px solid lightblue",
              borderRadius: "30px",
              marginTop: "20px",
              minWidth: "300px",
            }}
          >
            <div style={{ height: "30px", width: "30px", padding: "10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Find an exchange"
              style={{ border: "none", outline: "none", padding: "10px", width: "50%" }}
              onChange={(e) => setParams({ name: e.target.value })}
            />
            <div style={{ height: "30px", width: "30px", padding: "10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
        </section>
        <div style={{ textAlign: "right", marginRight: "10px" }}>
          <button
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid blue",
              fontWeight: "bold",
              color: "#0009",
              backgroundColor: "#fff",
            }}
            onClick={() => syncExchangeData()}
          >
            Sync Exchange Data
          </button>
        </div>
        <section id="table-container" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <table style={{ minWidth: "80%", position: "relative" }}>
            <thead>
              <th className="td-left">EXCHANGES</th>
              <th className="td-right">24H TRADE VOLUME</th>
            </thead>
            <tbody>
              {exchanges.length ? (
                exchanges.map((exchange, i) => {
                  return (
                    <tr key={i + ""}>
                      <td className="td-left">
                        <div className="td-leftContainer">
                          <span>{i + 1}</span>
                          <img src={`${exchange.iconUrl}`} className="iconImg" />
                          <a href={`${exchange.website}`} className="exchangeName" target="_blank">
                            {exchange.name}
                          </a>
                        </div>
                      </td>

                      <td className="td-right">{exchange.volume_1day_usd}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={2}>
                    <h4>No Exchanges Found</h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <section>
          <div className="pagination">
            <button
              className={activeBtn.prev ? "paginationButton paginationButton-active" : "paginationButton "}
              onClick={() => handlePage("prev", Number(params.currentPage) - 1)}
            >
              Prev
            </button>
            {[1, 2, 3, 4].map((val) => {
              return  <button className="paginationIndex"  onClick={()=>handlePage( val > params.currentPage ? "next" : "prev", val  )} >{val}</button>;
            })}
            <button
              className={activeBtn.next ? "paginationButton paginationButton-active" : "paginationButton "}
              onClick={() => handlePage("next", Number(params.currentPage) + 1)}
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
