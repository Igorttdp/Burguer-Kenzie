<p>Para README em Português, <a href="./README-ptbr.md" target="blank_">clique aqui</a></p>

<h2>Preview</h2>
<img src="./assets/bk-preview.png" alt="Burguer Kenzie Preview" />

<h1>About</h1>
<p>Burger Kenzie is a simple application that simulates fast food delivery. Perhaps your only defect is not completing the order 😅. The application consumes an api (GET: https://hamburgueria-kenzie-json-serve.herokuapp.com/products), handles the response data and renders it to the screen. Having a simple project as an initial proposal, I took the liberty to develop some extra features and refactor some points of the code.</p>

<br/>

<h2>Project Structuring and Technologies</h2>
<p>In this project, concepts of <strong>API Consumption</strong>, <strong>React Hooks</strong>, <strong>React Context</strong>, <strong>Componentization</strong> <strong>Conditional Rendering</strong> and <strong>Mobile First</strong>.</p>
<img src="./assets/bk-estrutura.png" alt="Folder Structure" />

<br/><br/>

<h3>Technologies / Libs</h3>
<ul>
    <li>Axios</li>
    <li>React-Js</li>
    <li>React Context</li>
    <li>Radix (Dialog & Switch)</li>
    <li>Styled-Components</li>
</ul>

<br/>

<h2>How it Works</h2>

<h3>Add food to Cart</h3>
<table>
    <tbody>
        <tr>
            <td width="50%" style="text-align: center;"><img src="./assets/bk-lanche.png" alt="Food"/></td>
            <td width="50%" style="text-align: center;"><p>On the home screen, we have a list of all available foods. Clicking on <strong>Add</strong>, the selected product goes directly to the cart. <strong>See below:</strong></p></td>
        </tr>
    </tbody>
</table>

<br/>
<img src="./assets/bk-noCarrinho.png" alt="Burguer Kenzie with food on the Cart" />
<br/><br/>

<h3>Cart</h3>
<p>On the right side we can see the <strong>Cart</strong>. Here we have full control over our products. We can <strong>adjust the quantity</strong> of our products and also <strong>remove all</strong> of them. At the bottom we have the total value being shown on the screen and the button to remove all products.</p>

<table>
    <tbody>
        <tr>
            <td width="50%" style="text-align: center;"><img src="./assets/bk-carrinho.png" alt="Cart" /></td>
            <td width="50%" style="text-align: center;"><img src="./assets/bk-carrinhoInferior.png" alt="Bottom of Cart" /></td>
        </tr>
    </tbody>
</table>

<br/><br/>

<h3>Quantities</h3>
<p>If you want to add several quantities of the same product at once, you can <strong>click on the card</strong> to open a <strong>modal</strong> (or <strong>dialog box</strong>), in the center of the screen.</p>

<img src="./assets/bk-modal.png" alt="Food Modal" />
<br/><br/>

<p>In the left part we can see all the available information of the selected snack. At the bottom we can <strong>select the desired quantity</strong> and <strong>add</strong> the product to the <strong>cart</strong>.</p>
<img src="./assets/bk-modalExp.jpeg" alt="Food Modal Left Side"/>

<br/><br/>

<p>On the right we can see our Component <strong>"Cart"</strong>. In it we can do all the functions. Add/Remove products and their quantities and remove all products.</p>
<img src="./assets/bk-modalExp2.png" alt="Food Modal Right Side"/>

<br/><br/>

<h2>Extra Features</h2>

<h3>Darkmode</h3>
<img src="./assets/switchOff.png" alt="Switch Button Off"/>
<img src="./assets/switchOn.png" alt="Switch Button On"/>
<img src="./assets/bk-darkmode.png" alt="Burguer Kenzie Darkmode"/>
<br/><br/>

<h3>Responsiveness and Mobile-First</h3>

<table>
    <tbody>
        <tr>
            <td width="50%" style="text-align: center;"><img src="./assets/bk-tablet.png" alt="Burguer Kenzie on Tablet Screen"/></td>
            <td width="50%" style="text-align: center;"><img src="./assets/bk-mobile.png" alt="Burguer Kenzie on Mobile Screen"/></td>
        </tr>
    </tbody>
</table>

<br/><br/>

<h2><strong>Link of Project:</strong> <a href="https://kenzie-burguer.igorttdp.vercel.app/" target="blank_">Burguer Kenzie</a></h2>
