# JavaScript Advanced - React - Proiectul 2

Magazinul online react-siluggia-shop este cel de-al doilea proiect din cadrul cursului JavaScript Advanced - React, predat fizic la sediul Telecom Academy. Cursul este continuarea celui de JavaScript Fundamentals. 

Pentru toate detaliile legate de curs, pteti accesa link-ul urmator: https://www.telacad.ro/cursuri/cooming-soon-curs-javascript-advanced-react/.

## Demo

Puteti accesa proiectul prin link-ul următor:

https://react-sirluggia-shop.herokuapp.com/ 


## Functionalitati

* Click pe orice categorie - va lista produsele corespunzatoare

* Click pe butonul "Adauga in cos" al fiecarui produs(fie din pagina de categorie, fie din pagina de produs) - produsul va fi adaugat in cos. Iconita corepsunzatoare se actualizeaza daca produsul nu exista deja in cos

* Click pe produs - va duce catre pagina produsului

* Click pe "Logare" - va redirecta catre pagina de Login, unde la click pe butonul "Logare cu Google" veti fi redirectionati catre pagina corespunzatoare

* Click pe cos(iconita) - va afisa produsele adaugate in cos. La click pe iconita "X" puteti elimina un produs din cos


## Pentru a rula local proiectul

1. `git clone https://github.com/razvancir96/react-sirluggia-shop.git`

2. `cd react-sirluggia-shop`

3. `npm install` (posibil sa dureze)

4. `npm start`


## Sub-repository-uri

Pentru a vedea progresiv cum a fost realizat acest proiect urmariti urmatoarele repo-uri. Comentariile/console.log-urile din fiecare fisier sunt specifice cursurului la care au fost facute. Versiunea finala este fara comentarii sau console.log-uri.

* Cursul 5: https://github.com/razvancir96/react-curs05

* Cursul 6: https://github.com/razvancir96/react-curs06

* Cursul 7: https://github.com/razvancir96/react-curs07

* Cursul 8: https://github.com/razvancir96/react-curs08

* Cursul 9: https://github.com/razvancir96/react-curs09

* Cursul 10: https://github.com/razvancir96/react-curs10


## Cetinte

Pentru a continua proiectul, avem urmatoarele cerinte:

1. Creati-va propriul repo pe github. Adaugati ca remote acest repo si luati cu `git pull` continutul. Pornind de la el, veti continua sa daugati functionalitati. **Modificati obiectul firebaseConfig, din configs/firebase.js, astfel incat sa contina datele din proiectul vostru de firebase. Altfel, cand va veti pune proiectul online, logarea nu va functiona.**

2. Creati paginile "About" si "Terms and Conditions"(plus ruta corespunzatoare pentru "Terms and conditions").

3. Modificati products.json, pastrandu-i structura, dar folosind produse/categorii proprii. De asemenea, creati-va un cont pe imgur si adaugati-va propriile imagini, actualizand si link-urile imaginilor din products.json. In final, generati-va un nou logo, corespunzator magazinului vostru.

4. Adaugati functionalitatea de logare cu Facebook(similar cu logare cu Google).

5. Adaugati functionalitatea de adaugare la favorite. Veti folosi redux, iar adaugarea se va face atat din pagina de categorie, cat si din pagina de produs. In header adaugati o iconita noua, care va va redirecta catre pagina de favorite, unde vor fi listate produsele corespunzatoare.

6. Modificati structura folderul "redux" astfel: in loc de folderele "actions" si "reducers", creati foldere per functionalitate, fiecare cu actiunile si reducerii speficifici. De exemplu: veti crea folderul cart, care va contine fisierele "CartActions.js" si "CartReducer.js".
De asemenea, pentru tipul actiunii, creati in fiecare folder un fisier de constante(ex: CartConstants.js), in care veti defini valorile corespunzatoare. In cadrul actiunilor si al reducerilor, in loc sa scrieti manual tipul actiunii(ex: 'REMOVE_FROM_CART'), il veti importa din fisierul de constante.

7. Modificati structura proiectului astfel: atat in componente, cat si in pagini, creati foldere noi, care sa contina toate fisierele corespunzatoare unei componente/pagini. De exemplu: pentru componenta Footer, se va crea un folder care va contine Footer.jsx si Footer.css.

