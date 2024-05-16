import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => { // Vérifie le comportement lorsqu'une page est créée

  it("a list of events is displayed", async () => {  // Vérifie si une liste d'évènements est affichée sur la page
    render(<Home />); // Rend le composant Home pour le test
    await screen.findByTestId("Events-list"); // Attend le rendu de "Events-list" dans l'interface utilisateur
  }) // Le test réussit si l'élément est trouvé

  it("a list a people is displayed", async () => { // Vérifie si une liste de personnes est affichée sur la page
    render(<Home />); // Rend le composant Home pour le test
    const PeopleList = screen.getByTestId('People-list'); // Sélectionne l'élément représentant la liste de personnes
    expect(PeopleList).toBeInTheDocument(); // Vérifie si la liste de personnes est présente dans l'interface utilisateur
  }) // Le test réussit si l'élément est trouvé

  it("a footer is displayed", async () => { // Vérifie si un footer est affiché sur la page
    render(<Home />); // Rend le composant Home pour le test
    await screen.findAllByTestId("Footer"); // Attend le rendu de "Footer" dans l'interface utilisateur
  }) // Le test réussit si l'élément est trouvé

  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
