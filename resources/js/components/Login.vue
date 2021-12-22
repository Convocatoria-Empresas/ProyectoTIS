<template>
    <main>
        <div id="login_outer">
			<div id="login_title">
				<span>Universidad Mayor de San Simon</span>
			</div>
	    </div>
        <div id="login_panel">
		<div id="login_panel_header"></div>
		<b>Correo Institucional</b>
		<table>
		<tbody>
			<tr>
				<td class="title">
					<label for="username_ex">Nombre de usuario</label>
				</td>
 			</tr>
			<tr>
				<td class="input">
					<input class="boton" type="text" id="username_ex" name="username_ex" value="" tabindex="1" required="required" size="40" autocapitalize="off" autocomplete="off" wtx-context="FA6ACC72-C2D6-4F85-BD9D-40A8FAD3B370">
				</td>
			</tr>
 			<tr>
				 <td class="title">
					 <label for="password">Contraseña</label>
				</td>
			</tr>
			<tr>
				<td>
					<input class="boton" type="password" id="password" name="password" tabindex="2" required="required" size="40" autocapitalize="off" autocomplete="off" wtx-context="083C7546-3F04-42F3-8A86-D6D164278C95">
					<input type="hidden" id="interface_ex" name="interface_ex" value="ajax" wtx-context="E8B863C5-97EF-4935-A7BE-E5AD67057A0F">
					<input type="hidden" id="language" name="language" value="Spanish" wtx-context="CD77BDB9-99EF-47F0-8B01-2CED81ACA079">
					<input type="hidden" name="lang_last" value="Spanish" wtx-context="FB6744EB-A65B-40F8-8752-7D3A66897C50">
					<input type="hidden" name="lang_showall" value="Spanish" wtx-context="711635A0-0533-44E4-896F-764CCC7A3767">
				</td>
			</tr>
 			<tr id="remember_me">
				<td colspan="2" class="title">Recordar mis datos<input name="remember" id="remember" type="checkbox" wtx-context="7CE6AA85-F08E-41F5-91C4-5273C86BD87A">
				</td>
			</tr>
			<tr id="bad_browser" style="text-align: left; display: none;">
				<td colspan="2">
					<div style="padding-top:5px; padding-bottom:5px;">Navegador: 		<span class="boldred">FAILED TEST</span>
					</div>
					<div style="font-size:0.9em;">Note:<span class="red">Un navegador moderno es necesario para usar el interfaz estandard (Ajax/Web 2.0)</span><br>&nbsp;&nbsp;- Validado para funcionar: IE7+, Safari 3.1+, Firefox 3.0+, Google Chrome 1+<br>&nbsp;&nbsp;- Mayormente funciona en: Opera 9.51, Firefox 2.0, Camino 1.69<br>&nbsp;&nbsp;- NO funciona en: varios otros navegadores antiguos incluyendo IE6<br>
					</div>
					<div style="padding-top:5px; padding-bottom:5px;">Nota: Otros navegadores modernos como Opera pueden funcionar pero se esta evaluando y desarrollando mayor compatibilidad</div>
        		</td>
			</tr>
 		</tbody>
		</table>
	</div>
    </main>
</template>
