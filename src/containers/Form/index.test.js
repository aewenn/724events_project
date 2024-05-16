import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
    await screen.findByText("En cours"); // Attente que le texte "En cours" soit affiché dans l'interface
    await waitFor(() => screen.findByText("Envoyer"), { timeout: 2000 }); // Attente que le bouton "Envoyer" soit affiché dans un délai maximum de 2 secondes
    expect(onSuccess).toHaveBeenCalled(); // Vérification que la fonction onSuccess a bien été appelée
    });
  });
});
