import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import Todolistcontainer from "../components/Todolistcontainer"

function Landing() {

    const data = useLocation()
    console.log(data.state.user)

    return (
        <div className="bg-[#000814] p-10">
            <div className="bg-[#e0e1dd] p-10 border rounded-md">
                {/*header*/}
                <Header username={data.state.user}/>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#ffb703"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#2a9d8f"} title={"June 1"} subtitle={"19:33:42"} />
                    <Card bgcolor={"#adc178"} title={"Build using"} subtitle={"React"} />
                </div>
                <Todolistcontainer />
            </div>
        </div>
    )
}

export default Landing