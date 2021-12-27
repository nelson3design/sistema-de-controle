<?php
include 'header.php';
?>
<?php
include 'bar-menu.php';


?>
<style>
    .pro {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
</style>
<div class="form-cadas">

    <div class="cadastrar-produto-title">
        <h2>cadastrar produtos</h2>
    </div>
    <form action="cadastrar-produto-action.php" method="POST">

        <div class="select">

            <select name="select-cat" class="select-cat">
                <option value="" selected>Escolha uma categoria</option>
                <option value=""></option>
            </select>
        </div>

        <div class="select">

            <select name="select-subcat" class="select-subcat">
                <option value="" selected>Escolha uma subcategoria</option>
                <option value=""></option>
            </select>

        </div>

        <div class="select">

            <select name="select-marca" class="selct-marca">
                <option value="" selected>Escolha uma marca</option>
                <option value=""></option>
            </select>
        </div>

        <input type="text" name="title" class="title" placeholder="Titulo">

        <textarea name="" id="" cols="30" rows="10" placeholder="Descrição"></textarea>

        <input type="text" name="valor" class="valor" placeholder="Valor">
        <input type="text" name="valor-promo" class="valor-promo" placeholder="Valor promocional">

        <input type="file" value="" class="arquivo">

        <div class="select">

            <select name="oferta" class="select-cat">
                <option value="" selected>Em oferta</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        </div>

        <div class="select situacao">

            <select name="situa" class="select-subcat">
                <option value="" selected>Situação</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
            </select>
        </div>


        <button type="submit" class="btn-cadas-pro">cadastrar</button>

    </form>

</div>

<?php
include 'end-header.php';

?>