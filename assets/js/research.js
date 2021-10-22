/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Magnetic Project",
        authors : "Gabriel Edrian A. Alvaro, John Christler E. Bautista, Alex Ralph A. Ramirez, Elino F. Candor,  Allyza Jane B. Abaday, Pranzin Mae P. Claveria, Lady Marielle A. De Torrez, Kailah F. Gupo, and Myrna P. Villa",
        conferences : "In partial Fulfilment of the Requirements for the Science, Technology, Engineering and Mathematics Track at Dagatan National High School-Senior High School",
        researchYr : 2019,
        citebox : "popup3",
        image : "assets/images/research-page/Magnetic Project.jpg",
        citation: {
            vancouver: "Gabriel Edrian A. Alvaro, John Christler E. Bautista, Alex Ralph A. Ramirez, Elino F. Candor,  Allyza Jane B. Abaday, Pranzin Mae P. Claveria, Lady Marielle A. De Torrez, Kailah F. Gupo, and Myrna P. Villa. Magnetic Project (MP). ."
        },
        abstract: "Electricity and magnetism are two of the most essential part of our daily lives. We are even using one or either both of them without even knowing about it. Electricity has contributed a lot of help in our lives especially now that we are living on the modern world. Every appliances or thing that we use are most likely to use electricity. On the other hand, magnetism is also involved with electricity. Electromagnetism has made a great impact on the history not only in the fields of electromagnetism, but also on the simplest things around us like microwave ovens, televisions, and many more. Due to our observation on our surroundings, the majority of the electricity that we used are from burning charcoals so we made an idea to used electromagnetism to generate electricity.",
        absbox: "absPopup3"
    },
    {
        title : "Enrichment Activities in Statistics and Probability",
        authors : "Almel John Alvaro, Gabriel Edrian Alvaro, Jeremy Braza, Elino Candor, Jhon Edvin Caraig, Chester Escubio, Lenard Gaton, Allyza Abaday, Abigail Banua, Gemma Mea De Guzman, Kailah Gupo, Blezie Mae Macalalad, and Vanessa Joy Neri",
        conferences : "Dagatan National Highshool/Senior High School-Research 1 Final Requirement",
        researchYr : 2018,
        citebox : "popup1",
        image : "assets/images/research-page/Enrichment Activities in Statistics and Probability.jpg",
        citation: {
            vancouver: "Almel John Alvaro, Gabriel Edrian Alvaro, Jeremy Braza, Elino Candor, Jhon Edvin Caraig, Chester Escubio, Lenard Gaton, Allyza Abaday, Abigail Banua, Gemma Mea De Guzman, Kailah Gupo, Blezie Mae Macalalad, and Vanessa Joy Neri. Enrichment Activities in Statistics and Probability. Dagatan National Highshool-Research 1 Final Requirement."
        },
        abstract: "The purpose of the study is to help the Grade 11 STEM students of Dagatan National High School - Senior High School in overcoming some of the difficulties in the subject Statistics and Probability. Other goals of the study are to increase the awareness of the students about the existing difficulties by naming some factors which make the topics difficult, to determine some strategies to be employed and to determine and make enrichment activities that may lessen the difficulties.",
        absbox: "absPopup1"
    },

    {
        title : "Batayan ng mga Mag-aaral Mula sa Dagatan National High School sa Pagpili ng mga Lider sa Loob ng Paaralan",
        authors : "Gabriel Edrian A. Alvaro, Eric James I. Andal, Dhaiane C. Asi, Zalene Angela M. Cometa, and Blezie Mae H. Macalalad",
        conferences : "Final Requirement para sa subject ng Pagbasa ng Iba’t Ibang Teksto Tungo sa Pananaliksik (PPITTP) sa Dagatan National High School/Senior High School",
        researchYr : 2018,
        citebox : "popup4",
        image : "assets/images/research-page/Batayan ng Mga Magaaral.jpg",
        citation: {
            vancouver: "Gabriel Edrian A. Alvaro, Eric James I. Andal, Dhaiane C. Asi, Zalene Angela M. Cometa, Blezie Mae H. Macalalad. Batayan ng mga Mag-aaral Mula sa Dagatan National High School sa Pagpili ng mga Lider sa Loob ng Paaralan. Final Requirement para sa subject ng Pagbasa ng Iba’t Ibang Teksto Tungo sa Pananaliksik (PPITTP) sa Dagatan National High School/Senior High School."
        },
        abstract: "	Mayroong mga bagay at salik ang isinaalang-alang sa pagpili ng ihahalal na mamumunong lider sa partikular na pamunuan na nanananitilng palaisipan sa karamihan. Kaugnay nito namasid ng mga risertser na may mga bagay na nakakaimpluwensya sa mga mag-aaral sa pagpili ng mga magiging lider ng paaralan. Gayundin, napansin nila ang iba’t-ibang mga basehan ng mga mag-aaral sa pagboto sa mga nais nilang mamuno. . Dulot ng ganitong obserbasyon, nakuha ng mga risertser ang motibasyon na isagawa ang pag-aaral. Naniniwala sila na ang pagpili sa magiging kabataang lider ng paaralan ay nangangailangan ng tamang batayan. Sa pamamagitan ng mga resulta ng pag-aaral, mabubuo ang mga gabay sa pagpili sa magiging pinuno.",
        absbox: "absPopup4"
    },

   
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

