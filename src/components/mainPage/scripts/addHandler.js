function addHandler(view) {
  addHandlerForLinkMenu(view);
}

function addHandlerForLinkMenu(mode) {
  let list, ref;

  if (mode === "header") {
    list = ".MPmenu__list";
    ref = ".MPmenu__link";
  } else if (mode === "MPpop-up-menu") {
    list = ".MPpop-up-menu__container";
    ref = ".MPpop-up-menu__row";
  }

  const menuList = document.querySelector(list);

  const links = menuList.querySelectorAll(ref);
  for (let i = 1; i < links.length; i++) {
    const addHandler = (link) => {
      return function (e) {
        e.preventDefault();

        let element = link;

        let substring = element.textContent.toLowerCase();

        if (element.textContent.includes(" ")) {
          const words = substring.split(" ");

          substring = words.join("-");
        }
        const elementScrollTo = document.querySelector(`.MPpage__${substring}`);

        const rect = elementScrollTo.getBoundingClientRect();

        window.scrollTo(0, rect.top);
      };
    };

    const onClick = addHandler(links[i]);

    links[i].addEventListener("click", onClick);
  }
}

export { addHandler };
