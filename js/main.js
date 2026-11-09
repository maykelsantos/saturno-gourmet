(function () {
  const SG = window.SG;
  const L = SG.links;
  const page = document.body.dataset.page || "";

  const icons = {
    whats: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    moto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M8.5 17h6l2-6h-4l-2 3H6M15 6h3l1.5 5"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  const reais = (v) => v.toFixed(2).replace(".", ",");
  const precoHTML = (v) => `<span class="preco"><small>R$</small>${reais(v)}</span>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- cabeçalho e rodapé ---------- */
  const links = [
    ["index.html", "Início", "inicio"],
    ["cardapio.html", "Cardápio", "cardapio"],
    ["index.html#promocoes", "Promoções", "promocoes"],
    ["contato.html", "Onde estamos", "contato"]
  ];
  const brand = `<a class="brand" href="index.html" aria-label="Saturno Gourmet, página inicial"><img src="img/logo.png" alt="" width="46" height="46"><span>Saturno<small>Gourmet</small></span></a>`;

  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        ${brand}
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([href, t, id]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
        <a class="btn btn--tinta btn--sm" href="${L.pedido}" target="_blank" rel="noopener">${icons.whats}Pedir agora</a>
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" aria-label="Abrir menu">${icons.menu}</button>
      </div>
    </header>`;
    const btn = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");
    const toggle = (open) => {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      btn.innerHTML = open ? icons.close : icons.menu;
    };
    btn.addEventListener("click", () => toggle(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            ${brand}
            <p class="footer__frase">Hambúrgueres, pizzas, massas e coquetéis no Garapu, Cabo de Santo Agostinho.</p>
          </div>
          <div>
            <h4>Páginas</h4>
            <ul>${links.map(([href, t]) => `<li><a href="${href}">${t}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Horários</h4>
            <ul>${SG.horarios ? horariosResumo() : '<li><span class="placeholder">[horários a confirmar]</span></li>'}</ul>
          </div>
          <div>
            <h4>Fale com a gente</h4>
            <ul>
              <li><a href="${L.whatsapp}" target="_blank" rel="noopener">WhatsApp ${L.whatsappTexto}</a></li>
              <li><a href="${L.instagram}" target="_blank" rel="noopener">Instagram ${L.instagramUser}</a></li>
              <li><a href="${L.mapa}" target="_blank" rel="noopener">${SG.endereco.linha1}<br>${SG.endereco.linha2}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__fim"><span>© ${new Date().getFullYear()} Saturno Gourmet</span><span>Sabor de outro planeta, aqui no Cabo.</span></div>
      </div>
    </footer>
    <a class="fab-whats" href="${L.pedido}" target="_blank" rel="noopener" aria-label="Pedir pelo WhatsApp">${icons.whats}</a>
    <div class="mobile-cta">
      <a class="btn btn--tinta" href="${L.pedido}" target="_blank" rel="noopener">${icons.whats}Pedir agora</a>
      <a class="btn btn--contorno" href="cardapio.html">Cardápio</a>
    </div>`;
  }

  function horariosResumo() {
    return [1, 2, 3, 4, 5, 6, 0].map((d) => `<li>${SG.dias[d].slice(0, 3)} · ${SG.horarios[d] ? `${SG.horarios[d][0]}h–${SG.horarios[d][1]}h` : "fechado"}</li>`).join("");
  }

  /* ---------- aberto / fechado (horário de Recife) ---------- */
  function agoraRecife() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Recife", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { dia: dias[get("weekday")], hora: (+get("hour") % 24) + (+get("minute")) / 60 };
  }
  const agora = agoraRecife();
  if (SG.horarios) {
    const hoje = SG.horarios[agora.dia];
    const aberto = hoje && agora.hora >= hoje[0] && agora.hora < hoje[1];
    document.querySelectorAll("[data-status]").forEach((el) => {
      el.textContent = aberto ? `Aberto agora · até ${hoje[1]}h` : "Fechado agora";
    });
  } else document.querySelectorAll("[data-status]").forEach((el) => { el.innerHTML = '<span class="placeholder">[horário a confirmar]</span>'; });

  const hoursEl = document.querySelector("[data-hours]");
  if (hoursEl) {
    hoursEl.innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d) => {
      const hr = SG.horarios && SG.horarios[d];
      const txt = !SG.horarios ? '<span class="placeholder">[a confirmar]</span>' : hr ? `${hr[0]}h – ${hr[1]}h` : "Fechado";
      return `<tr class="${d === agora.dia ? "is-today" : ""}"><td>${SG.dias[d]}${d === agora.dia ? " (hoje)" : ""}</td><td>${txt}</td></tr>`;
    }).join("");
  }

  /* ---------- página inicial ---------- */
  const mundos = document.querySelector("[data-mundos]");
  if (mundos) mundos.innerHTML = SG.vitrine.map((v) => `
    <a class="mundo reveal" href="cardapio.html#${v.cat}">
      <span class="mundo__foto"><img src="img/fotos/${v.foto}.jpg" alt="" loading="lazy" width="480" height="480"></span>
      <h3 class="h3">${v.titulo}</h3>
      <p>${v.sub}</p>
      <span class="mundo__seta">Ver no cardápio →</span>
    </a>`).join("");

  const sistema = document.querySelector("[data-sistema]");
  if (sistema) {
    const pizzas = SG.categorias.find((c) => c.id === "pizzas").itens;
    sistema.innerHTML = pizzas.map((p) => `
      <a class="astro-card" href="cardapio.html#pizzas" style="text-decoration:none">
        <span class="astro astro--${p.astro}" aria-hidden="true"></span>
        <strong>${p.nome}</strong>
        ${precoHTML(p.preco)}
      </a>`).join("");
  }

  const galeria = document.querySelector("[data-galeria]");
  if (galeria) galeria.innerHTML = SG.galeria.map((f) => `<a href="${L.instagram}" target="_blank" rel="noopener" aria-label="Ver mais no Instagram"><img src="img/fotos/${f}.jpg" alt="" loading="lazy" width="480" height="480"></a>`).join("");

  /* ---------- cardápio + sacola ---------- */
  const menu = document.querySelector("[data-menu]");
  if (menu) {
    const tabs = document.querySelector("[data-tabs]");
    tabs.innerHTML = SG.categorias.map((c, i) => `<a class="chip${i === 0 ? " is-active" : ""}" href="#${c.id}">${c.nome}</a>`).join("");
    menu.innerHTML = SG.categorias.map((c) => `
      <section class="menu-sec" id="${c.id}" aria-labelledby="t-${c.id}">
        <div class="menu-sec__head">
          <h2 class="h2" id="t-${c.id}" style="font-size:clamp(26px,3.6vw,38px)">${c.nome}</h2>
          ${c.nota ? `<p>${c.nota}</p>` : ""}
        </div>
        <div class="itens">
          ${c.itens.map((it, i) => {
            const id = `${c.id}-${i}`;
            const nomePedido = c.id === "hotdogs" ? `Hot dog ${it.nome.toLowerCase()}` : c.id === "crepes" ? `Crepe ${it.nome}` : c.id === "tapiocas" ? `Tapioca ${it.nome}` : c.id === "combos" ? `Combo ${it.nome}` : c.id === "pizzas" ? `Pizza ${it.nome}` : c.id === "burgers" ? `Burger ${it.nome}` : c.id === "massas" ? it.nome : c.id === "batatas" || c.id === "bebidas" || c.id === "coqueteis" ? it.nome : c.id === "pratos" ? `Prato ${it.nome}` : it.nome;
            return `
            <div class="item${it.astro ? "" : " item--sem-astro"}">
              ${it.astro ? `<span class="astro astro--sm astro--${it.astro} item__astro" aria-hidden="true"></span>` : ""}
              <span class="item__nome">${it.nome}</span>
              <span class="item__acao">${precoHTML(it.preco)}<button class="add" type="button" data-add="${id}" data-nome="${esc(nomePedido)}" data-preco="${it.preco}" aria-label="Adicionar ${esc(nomePedido)} ao pedido">+</button></span>
              ${it.desc ? `<span class="item__desc">${it.desc}</span>` : ""}
            </div>`;
          }).join("")}
        </div>
      </section>`).join("");

    const chips = [...tabs.querySelectorAll(".chip")];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        chips.forEach((c) => c.classList.toggle("is-active", c.getAttribute("href") === "#" + e.target.id));
        const a = tabs.querySelector(".is-active");
        if (a) a.parentElement.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
      });
    }, { rootMargin: "-150px 0px -65% 0px" });
    menu.querySelectorAll(".menu-sec").forEach((s) => obs.observe(s));
    // o cardápio é montado via JS: ao chegar com #categoria, rolar até ela
    if (location.hash) { const alvo = document.getElementById(location.hash.slice(1)); if (alvo) requestAnimationFrame(() => alvo.scrollIntoView({ behavior: "auto" })); }

    iniciarSacola();
  }

  function iniciarSacola() {
    let sacola = {};
    try { sacola = JSON.parse(localStorage.getItem("sg-sacola") || "{}") || {}; } catch (e) { sacola = {}; }
    const salvar = () => { try { localStorage.setItem("sg-sacola", JSON.stringify(sacola)); } catch (e) { /* sem storage */ } };

    document.body.insertAdjacentHTML("beforeend", `
      <div class="sacola-barra" role="region" aria-label="Seu pedido" aria-live="polite">
        <div class="sacola-barra__info"><strong data-s-total></strong><span data-s-resumo></span></div>
        <button class="btn btn--amarelo" type="button" data-s-abrir>${icons.bag}Ver pedido</button>
      </div>
      <dialog class="sacola-dialog" aria-labelledby="s-titulo">
        <div class="sacola-dialog__in">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
            <h2 class="h3" id="s-titulo">Seu pedido</h2>
            <button class="add" type="button" data-s-fechar aria-label="Fechar">×</button>
          </div>
          <ul class="sacola-lista" data-s-lista></ul>
          <div class="sacola-total"><span>Total dos itens</span><span data-s-total2></span></div>
          <label>Observações (sabor da borda, retirar algum ingrediente, endereço de entrega…)
            <textarea data-s-obs rows="3"></textarea>
          </label>
          <p class="nota">O pedido é enviado pelo WhatsApp. A taxa de entrega e a forma de pagamento são combinadas na conversa.</p>
          <div class="acoes">
            <button class="btn btn--contorno" type="button" data-s-limpar>Limpar</button>
            <a class="btn btn--tinta" data-s-enviar target="_blank" rel="noopener">${icons.whats}Enviar no WhatsApp</a>
          </div>
        </div>
      </dialog>`);

    const barra = document.querySelector(".sacola-barra");
    const dlg = document.querySelector(".sacola-dialog");
    const itens = () => Object.entries(sacola).filter(([, v]) => v.q > 0);
    const total = () => itens().reduce((s, [, v]) => s + v.q * v.p, 0);

    function mensagem() {
      const linhas = itens().map(([, v]) => `• ${v.q}x ${v.n} — R$ ${reais(v.q * v.p)}`);
      const obs = dlg.querySelector("[data-s-obs]").value.trim();
      return `Olá, Saturno Gourmet! Quero fazer este pedido:\n\n${linhas.join("\n")}\n\nTotal dos itens: R$ ${reais(total())}${obs ? `\n\nObservações: ${obs}` : ""}`;
    }

    function render() {
      const lista = itens();
      const qtd = lista.reduce((s, [, v]) => s + v.q, 0);
      barra.classList.toggle("is-on", qtd > 0);
      document.body.classList.toggle("tem-sacola", qtd > 0);
      barra.querySelector("[data-s-total]").textContent = `${qtd} ${qtd === 1 ? "item" : "itens"} · R$ ${reais(total())}`;
      barra.querySelector("[data-s-resumo]").textContent = lista.map(([, v]) => `${v.q}x ${v.n}`).join(", ");
      dlg.querySelector("[data-s-total2]").textContent = `R$ ${reais(total())}`;
      dlg.querySelector("[data-s-lista]").innerHTML = lista.length ? lista.map(([id, v]) => `
        <li><span>${esc(v.n)}</span>
          <span class="qtd"><button type="button" data-menos="${id}" aria-label="Tirar um ${esc(v.n)}">−</button><b>${v.q}</b><button type="button" data-mais="${id}" aria-label="Mais um ${esc(v.n)}">+</button></span>
          <span class="preco">R$ ${reais(v.q * v.p)}</span></li>`).join("") : "<li>Nenhum item ainda.</li>";
      dlg.querySelector("[data-s-enviar]").href = `${L.whatsapp}?text=${encodeURIComponent(mensagem())}`;
      document.querySelectorAll("[data-add]").forEach((b) => b.classList.toggle("is-added", !!(sacola[b.dataset.add] && sacola[b.dataset.add].q)));
      salvar();
    }

    document.addEventListener("click", (e) => {
      const add = e.target.closest("[data-add]");
      if (add) {
        const id = add.dataset.add;
        sacola[id] = sacola[id] || { n: add.dataset.nome, p: +add.dataset.preco, q: 0 };
        sacola[id].q++;
        render();
        return;
      }
      const mais = e.target.closest("[data-mais]"), menos = e.target.closest("[data-menos]");
      if (mais) { sacola[mais.dataset.mais].q++; render(); }
      if (menos) { const v = sacola[menos.dataset.menos]; v.q--; if (v.q <= 0) delete sacola[menos.dataset.menos]; render(); }
      if (e.target.closest("[data-s-abrir]")) dlg.showModal();
      if (e.target.closest("[data-s-fechar]")) dlg.close();
      if (e.target.closest("[data-s-limpar]")) { sacola = {}; render(); dlg.close(); }
    });
    dlg.querySelector("[data-s-obs]").addEventListener("input", () => { dlg.querySelector("[data-s-enviar]").href = `${L.whatsapp}?text=${encodeURIComponent(mensagem())}`; });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    render();
  }

  /* ---------- links dinâmicos ---------- */
  document.querySelectorAll("[data-link]").forEach((a) => {
    const k = a.dataset.link;
    if (L[k]) { a.href = L[k]; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.insertAdjacentHTML("afterbegin", icons[el.dataset.icon] || ""); });
  document.querySelectorAll("[data-endereco]").forEach((el) => { el.innerHTML = `${SG.endereco.linha1}<br>${SG.endereco.linha2}`; });
  document.querySelectorAll("[data-map]").forEach((el) => {
    el.innerHTML = `<iframe src="${L.mapaEmbed}" title="Mapa: ${SG.endereco.linha1}, ${SG.endereco.linha2}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  });

  /* ---------- animação ao rolar ---------- */
  const rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: .12 });
    rev.forEach((r) => io.observe(r));
  } else rev.forEach((r) => r.classList.add("is-in"));
})();
