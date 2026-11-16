
document.addEventListener("DOMContentLoaded", () => {
  const cores = ["#6c4cf0", "#2f7bff", "#3fae3a", "#b9a8ff", "#35c6f4", "#b4ecaa"];

  const confete = (x, y, n = 24) => {
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i");
      c.className = "conf";
      c.style.cssText = `left:${x}px;top:${y}px;background:${cores[i % cores.length]};border-radius:${i % 2 ? "50%" : "2px"};--x:${(Math.random() - .5) * 280}px;--y:${(Math.random() - .8) * 260}px`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 900);
    }
  };
  document.querySelectorAll(".btn").forEach((b) =>
    b.addEventListener("click", (e) => confete(e.clientX, e.clientY)));

  const alvos = document.querySelectorAll(".disc > *, .card, .future > *, .contact");
  alvos.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .15 });
  alvos.forEach((el) => io.observe(el));

  const links = document.querySelectorAll(".nav a");
  const secoes = [...links].map((a) => document.querySelector(a.hash));
  const io2 = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  secoes.forEach((s) => s && io2.observe(s));

  if (matchMedia("(hover:hover)").matches) {
    const f = document.createElement("div");
    f.id = "fish"; f.textContent = "🐟";
    document.body.appendChild(f);
    let ultimoX = 0;
    addEventListener("mousemove", (e) => {
      const vira = e.clientX < ultimoX ? -1 : 1;
      ultimoX = e.clientX;
      f.style.transform = `translate(${e.clientX + 14}px,${e.clientY + 14}px) scaleX(${vira})`;
    });
  }

});
