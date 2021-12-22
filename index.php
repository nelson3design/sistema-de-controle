<?php
include 'header.php'

?>
     <h3 class="login-text">LOGIN</h3>

<form action="login.php" method="POST" class="form">

<input type="text" placeholder="USUÁRIO" name="usuario" class="user" required>
<input type="password" placeholder="SENHA" name="senha" class="pass" required>
<button type="submit" class="submit">ENTRAR</button>
</form>




<?php
include 'end-header.php'

?>