import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from "../../utils/request";
import './style.css';
import { Sale } from "../../models/sale"

function Top3() {

    const [top3, setTop3] = useState<Sale[]>([]);

    useEffect(() => {

        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setTop3((response.data.content).slice(0, 3))
               
            });
    }, []);

    


    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title-top">Top 3 de vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">

                </div>
                <div className="dsmeta-form-control-container">

                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {top3.map((sale, index) => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>{index + 1}ª</td>
                                </tr>
                            )
                        })

                        }

                    </tbody>

                </table>
            </div>

        </div>

    )

}

export default Top3;
