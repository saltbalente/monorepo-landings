(function () {
  "use strict";
  var ARCANOS = [{"n":0,"nombre":"El Loco","simbolo":"✦","si":"si","pasado":"Un salto que diste sin red y que todavía te define.","presente":"Estás a punto de empezar algo; la duda es normal, no una señal.","camino":"Avanza ligero: lo que sueltes ahora pesa menos que lo que temes.","siNo":"Sí, si lo tomas como un comienzo y no como una garantía."},{"n":1,"nombre":"El Mago","simbolo":"∞","si":"si","pasado":"Tuviste los recursos y los usaste; ese oficio sigue contigo.","presente":"Tienes lo necesario sobre la mesa: falta decidir, no esperar.","camino":"Concreta un solo paso hoy; la voluntad se demuestra actuando.","siNo":"Sí: tienes lo que hace falta, y depende de que lo pongas en marcha."},{"n":2,"nombre":"La Sacerdotisa","simbolo":"☽","si":"depende","pasado":"Algo que intuías y callaste; tenías razón en escuchar.","presente":"No todo está a la vista todavía: observa antes de mover.","camino":"Espera la información que falta; la prisa aquí cuesta cara.","siNo":"Todavía no: hay algo que no sabes y conviene saberlo antes."},{"n":3,"nombre":"La Emperatriz","simbolo":"✿","si":"si","pasado":"Un tiempo fértil, de cuidado recibido o dado, que dejó raíz.","presente":"Lo que cuidas crece; es momento de nutrir, no de exigir.","camino":"Crecerá si le das tiempo y cuidado constante.","siNo":"Sí, con paciencia: es algo que crece, no que se fuerza."},{"n":4,"nombre":"El Emperador","simbolo":"♚","si":"si","pasado":"Una estructura o una figura de autoridad marcó tus reglas.","presente":"Toca poner orden y límites claros; el caos no ayuda.","camino":"Un plan firme y una decisión sostenida te llevan lejos.","siNo":"Sí, si lo ordenas con estructura y límites claros."},{"n":5,"nombre":"El Sumo Sacerdote","simbolo":"☩","si":"depende","pasado":"Una enseñanza o una tradición te dio el marco desde el que decides.","presente":"Busca consejo en quien ya recorrió este camino.","camino":"Respeta las reglas del terreno y pide guía antes de improvisar.","siNo":"Depende de que sigas un camino probado en vez de atajos."},{"n":6,"nombre":"Los Enamorados","simbolo":"♡","si":"depende","pasado":"Una elección del corazón que todavía influye en lo que sientes.","presente":"Hay dos caminos y ninguno es gratis: elige con los ojos abiertos.","camino":"La respuesta llega cuando decides, no cuando esperas a que decidan por ti.","siNo":"Depende de una elección que solo tú puedes tomar."},{"n":7,"nombre":"El Carro","simbolo":"⚜","si":"si","pasado":"Un avance que ganaste con esfuerzo y disciplina.","presente":"Tienes impulso; dirígelo, no lo dejes ir en varias direcciones.","camino":"Avanzas si mantienes el rumbo, aunque tire de ti en dos sentidos.","siNo":"Sí, con determinación: aquí manda la voluntad."},{"n":8,"nombre":"La Fuerza","simbolo":"♌","si":"si","pasado":"Aguantaste algo con más calma de la que creías tener.","presente":"Se resuelve con paciencia y firmeza suave, no a la fuerza.","camino":"Domina el impulso y el tiempo trabajará a tu favor.","siNo":"Sí, si lo manejas con paciencia y no con fuerza."},{"n":9,"nombre":"El Ermitaño","simbolo":"☼","si":"depende","pasado":"Un tiempo a solas que te dio claridad.","presente":"Necesitas silencio y distancia para ver bien.","camino":"Retírate un poco: la respuesta está dentro, no en el ruido.","siNo":"Todavía no: antes necesitas tiempo a solas para verlo claro."},{"n":10,"nombre":"La Rueda de la Fortuna","simbolo":"☸","si":"depende","pasado":"Un giro que no controlabas cambió el tablero.","presente":"Las cosas se mueven; algo cambia aunque no lo empujes tú.","camino":"Acepta el giro y aprovéchalo; resistirlo cansa y no lo detiene.","siNo":"Depende del momento: el ciclo está cambiando y conviene esperar el giro."},{"n":11,"nombre":"La Justicia","simbolo":"⚖","si":"depende","pasado":"Una consecuencia que fue justa, aunque no fuera fácil.","presente":"Se pesa lo que hiciste y lo que dejaste de hacer; sé honesto.","camino":"Actúa con rectitud y el resultado será equilibrado.","siNo":"Sí si es justo para todas las partes; si no lo es, no."},{"n":12,"nombre":"El Colgado","simbolo":"⟲","si":"no","pasado":"Un sacrificio o una pausa que en su momento no entendiste.","presente":"Estás en pausa; mirar desde otro ángulo vale más que empujar.","camino":"Suelta el control un tiempo; lo que se ve al revés se entiende mejor.","siNo":"No por ahora: es tiempo de pausa y de cambiar de perspectiva."},{"n":13,"nombre":"La Muerte","simbolo":"☥","si":"depende","pasado":"Un final que cerró una etapa entera.","presente":"Algo termina para que otra cosa empiece; no lo retengas.","camino":"Deja ir lo que ya cumplió su ciclo y llega el espacio nuevo.","siNo":"No como está: algo tiene que terminar antes de que sea posible."},{"n":14,"nombre":"La Templanza","simbolo":"♒","si":"si","pasado":"Un equilibrio que encontraste mezclando paciencia y medida.","presente":"La respuesta está en el término medio, sin extremos.","camino":"Poco a poco, con calma y constancia, se logra.","siNo":"Sí, con moderación y tiempo; sin extremos."},{"n":15,"nombre":"El Diablo","simbolo":"⛓","si":"no","pasado":"Una atadura o una tentación que te costó más de lo que parecía.","presente":"Hay una dependencia o un miedo que te tiene sujeto; nómbralo.","camino":"Libérate de lo que te ata antes de dar el paso.","siNo":"No: hay una atadura que conviene soltar primero."},{"n":16,"nombre":"La Torre","simbolo":"⚡","si":"no","pasado":"Una ruptura repentina que derribó lo que estaba mal construido.","presente":"Algo se derrumba; lo que cae no se sostenía.","camino":"Deja caer lo que no tiene base y reconstruye sobre verdad.","siNo":"No: lo que se apoya en esto no aguanta."},{"n":17,"nombre":"La Estrella","simbolo":"★","si":"si","pasado":"Una esperanza que te sostuvo en un tiempo difícil.","presente":"Hay esperanza fundada; sanas y ves más claro.","camino":"Confía y sigue: el horizonte se abre.","siNo":"Sí: hay esperanza real y buen augurio."},{"n":18,"nombre":"La Luna","simbolo":"☾","si":"no","pasado":"Una confusión o un engaño que te hizo dudar de ti.","presente":"No todo es lo que parece; hay miedos e ilusiones en juego.","camino":"Espera a que se aclare; no decidas entre sombras.","siNo":"No por ahora: hay confusión y cosas que no se ven claras."},{"n":19,"nombre":"El Sol","simbolo":"☉","si":"si","pasado":"Una alegría clara, un logro que te dio confianza.","presente":"Claridad y éxito; lo que buscas está a la luz.","camino":"Adelante con confianza: el resultado es favorable.","siNo":"Sí, con claridad: es de las respuestas más favorables."},{"n":20,"nombre":"El Juicio","simbolo":"✺","si":"si","pasado":"Un despertar, una llamada que cambió tu forma de ver.","presente":"Es tiempo de decidir con conciencia y cerrar cuentas pendientes.","camino":"Responde a la llamada; se renueva lo que estaba dormido.","siNo":"Sí, si lo decides con conciencia y cierras lo pendiente."},{"n":21,"nombre":"El Mundo","simbolo":"❂","si":"si","pasado":"Un ciclo que completaste con éxito.","presente":"Estás cerrando un ciclo completo; se reconoce lo logrado.","camino":"Culminación: llegas, y se abre el siguiente nivel.","siNo":"Sí: es la carta de la culminación y del logro."}];
  var VEREDICTOS = {"si":"Sí","no":"No","depende":"Depende"};

  function baraja(cuantas) {
    var indices = [];
    for (var i = 0; i < ARCANOS.length; i += 1) indices.push(i);
    for (var j = indices.length - 1; j > 0; j -= 1) {
      var k = Math.floor(Math.random() * (j + 1));
      var t = indices[j]; indices[j] = indices[k]; indices[k] = t;
    }
    return indices.slice(0, cuantas);
  }

  function pon(nodo, texto) { if (nodo) nodo.textContent = texto; }

  function conMensaje(enlace, extra) {
    if (!enlace) return;
    var href = enlace.getAttribute("href") || "";
    var corte = href.indexOf("?");
    var base = corte >= 0 ? href.slice(0, corte) : href;
    var params = new URLSearchParams(corte >= 0 ? href.slice(corte + 1) : "");
    if (!enlace.dataset.textoBase) enlace.dataset.textoBase = params.get("text") || "";
    params.set("text", (enlace.dataset.textoBase + " " + extra).trim());
    enlace.setAttribute("href", base + "?" + params.toString());
  }

  function montaTirada(widget) {
    var cartas = Array.prototype.slice.call(widget.querySelectorAll("button[data-tarot-card]"));
    if (cartas.length !== 3) return;
    var elegidas = baraja(3);
    var resultado = widget.querySelector("[data-tarot-resultado]");
    var cta = widget.querySelector("[data-tarot-cta]");
    var giradas = 0;
    var salidas = [];
    cartas.forEach(function (carta, i) {
      var arcano = ARCANOS[elegidas[i]];
      var posicion = carta.getAttribute("data-posicion") || "presente";
      var lectura = arcano[posicion] || arcano.presente;
      pon(carta.querySelector(".tarot-simbolo"), arcano.simbolo);
      pon(carta.querySelector(".tarot-nombre"), arcano.nombre);
      pon(carta.querySelector(".tarot-lectura"), lectura);
      carta.addEventListener("click", function () {
        if (carta.classList.contains("is-flipped")) return;
        carta.classList.add("is-flipped");
        carta.setAttribute("aria-label", posicion + ": " + arcano.nombre + ". " + lectura);
        giradas += 1;
        salidas.push(posicion + ": " + arcano.nombre);
        if (giradas === 3 && resultado) {
          resultado.hidden = false;
          resultado.textContent = "Tu tirada: " + salidas.join(" · ") + ". Léela como un mapa, no como una sentencia: lo que hagas con ella es lo que cuenta.";
          if (cta) conMensaje(cta, "Mi tirada fue: " + salidas.join(", ") + ".");
        }
      });
    });
  }

  function montaSiNo(widget) {
    var form = widget.querySelector("[data-si-no-form]");
    var input = widget.querySelector("[data-si-no-pregunta]");
    var salida = widget.querySelector("[data-si-no-respuesta]");
    if (!form || !salida) return;
    var cta = widget.querySelector("[data-si-no-cta]");
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var pregunta = input ? input.value.trim() : "";
      var arcano = ARCANOS[Math.floor(Math.random() * ARCANOS.length)];
      pon(widget.querySelector("[data-si-no-carta]"), arcano.simbolo + " " + arcano.nombre);
      pon(widget.querySelector("[data-si-no-veredicto]"), VEREDICTOS[arcano.si] || "Depende");
      pon(widget.querySelector("[data-si-no-lectura]"), arcano.siNo);
      salida.hidden = false;
      if (cta) conMensaje(cta, "Saqué " + arcano.nombre + (pregunta ? " para la pregunta: " + pregunta : "") + ".");
    });
  }

  // ── Medición: la torre sabe qué página produce cada tap a WhatsApp ────
  // Sin gclid ni cookies: una vista al cargar y un tap al tocar wa.me, con la
  // ruta y la keyword de la página. Nada más sale del navegador.
  function meta(nombre) {
    var m = document.querySelector('meta[name="' + nombre + '"]');
    return m ? String(m.getAttribute("content") || "") : "";
  }
  var MEDICION = meta("torre-medicion");
  // Con "torre-gtag" la página mide con la etiqueta del PROPIO sitio y no sale
  // nada hacia otro dominio. La conversión de Ads en el tap ya la pone
  // hardenHtml con el send_to del sitio, así que aquí van eventos con otro
  // nombre: contarla dos veces sería peor que no contarla.
  var MIDE_GTAG = meta("torre-gtag") === "1";
  var TERMINO = meta("torre-keyword");
  var t0 = Date.now();
  var scrollMax = 0;
  function mide() {
    try {
      var h = document.documentElement;
      var total = Math.max(1, (h.scrollHeight || 1) - (window.innerHeight || 0));
      var pct = Math.round(((window.pageYOffset || h.scrollTop || 0) / total) * 100);
      if (pct > scrollMax) scrollMax = Math.min(100, pct);
    } catch (e) {}
  }
  function beacon(datos) {
    if (!MEDICION) return;
    var payload = JSON.stringify(Object.assign({
      blog: true, landing: location.host + location.pathname, term: TERMINO, vw: window.innerWidth || 0,
      secs: Math.min(9999, Math.round((Date.now() - t0) / 1000)), scr: scrollMax,
    }, datos));
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(MEDICION, payload);
      else fetch(MEDICION, { method: "POST", headers: { "Content-Type": "text/plain" }, body: payload, keepalive: true });
    } catch (e) {}
  }
  function propio(nombre, datos) {
    if (!MIDE_GTAG || typeof gtag !== "function") return;
    try { gtag("event", nombre, datos); } catch (e) {}
  }
  function montaMedicion() {
    if (!MEDICION && !MIDE_GTAG) return;
    window.addEventListener("scroll", mide, { passive: true });
    var clave = "torre_vista_" + location.pathname;
    var vista = false;
    try { vista = Boolean(sessionStorage.getItem(clave)); } catch (e) {}
    if (!vista) {
      try { sessionStorage.setItem(clave, "1"); } catch (e) {}
      beacon({ evento: "vista" });
      propio("blog_vista", { termino: TERMINO, ruta: location.pathname });
    }
    document.addEventListener("click", function (evento) {
      var a = evento.target && evento.target.closest ? evento.target.closest('a[href*="wa.me/"],a[href*="api.whatsapp.com"]') : null;
      if (!a) return;
      var zona = a.closest("[data-torre-barra]") ? "barra" : (a.closest(".torre-widget") ? "widget" : (a.classList.contains("floating-whatsapp") ? "flotante" : "texto"));
      beacon({ evento: "tap", zona: zona });
      propio("blog_whatsapp", { termino: TERMINO, zona: zona, ruta: location.pathname });
    }, true);
  }

  function arranca() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-torre-tirada]"), montaTirada);
    Array.prototype.forEach.call(document.querySelectorAll("[data-torre-si-no]"), montaSiNo);
    montaMedicion();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arranca);
  else arranca();
})();
