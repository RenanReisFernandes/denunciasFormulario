import React from 'react';
import './Formulario.css'


function Formulario() {
    return (
        <div className="body_form">


            <div className="form_father">

<h1>Formulario</h1>

                <div className="acordion">
                    <div className="acordionHeading">
                        <div className="container">
                            <label>Faixa etária</label>
                        </div>

                    </div>

                    <div className="acordioncontent">
                        <div className="container">

                            <select className="class_select" required>
                                <option className="class_select" value="18 à 23">18 à 22</option>
                                <option className="class_select" value="24 à 28">24 à 28</option>
                                <option className="class_select" value="29 à 33">29 à 33</option>
                                <option className="class_select" value="34 à 38">34 à 38</option>
                                <option className="class_select" value="39 em diante">39 em diante</option>
                            </select>


                        </div>

                    </div>


                    <div className="acordionHeading">
                        <div className="container">
                            <label>Gênero</label>
                        </div>

                    </div>

                    <div className="acordioncontent">
                        <div className="container">

                            <select className="class_select" required>
                                <option className="class_select" value="Masculino cisgênero" >Masculino cisgênero</option>
                                <option className="class_select" value="Feminino cisgênero" >Feminino cisgênero</option>
                                <option className="class_select" value="Masculino transgênero"  >Masculino transgênero</option>
                                <option className="class_select" value="Feminino transgênero" >Feminino transgênero</option>
                                <option className="class_select" value="Não declarar"  >Não declarar</option>

                            </select>


                        </div>

                    </div>



                    <div className="acordionHeading">
                        <div className="container">
                            <label>Região</label>

                        </div>

                    </div>

                    <div className="acordioncontent">
                        <div className="container">

                            <select className="class_select" required>
                                <option value="Sul">Sul sudeste</option>
                                <option value="Leste">Leste cestral</option>
                                <option value="Oeste">Oeste centroeste</option>
                            </select>


                        </div>

                    </div>


                    <div className="acordionHeading">
                        <div className="container">
                            <label>Tipo de violência</label>

                        </div>

                    </div>

                    <div className="acordioncontent">
                        <div className="container">

                            <select className="class_select" required>
                                <option value="Policial">Policial</option>
                                <option value="Injuria racial">Injuria racial</option>
                                <option value="Racismo">Racismo</option>
                            </select>


                        </div>

                    </div>



                </div>



            </div>



        </div>
    )
}
export default Formulario;