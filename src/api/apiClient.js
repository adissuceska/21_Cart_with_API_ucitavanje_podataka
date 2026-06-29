// [Zadatak 4]: Kreiran fajl src/api/apiClient.js
// Definisana osnovna URL adresa API-ja, zaglavlja (headers) i funkcija za slanje zahteva

const API_BASE_URL = "https://api.advanziaeducation.com";
const API_KEY = "d7534cbd9ee8a1d277508f05318830010270e1c3699cacf82f8ec53f79b486a2"; // API ključ

export const fetchCartData = async (cartId) => {
  console.log(`Slanje GET zahteva za korpu ID: ${cartId}...`);

  try {
    // [Zadatak 5]: GET zahtev ka API-ju: https://api.advanziaeducation.com/carts/1
    const response = await fetch(`${API_BASE_URL}/carts/${cartId}`, {
      headers: {
        "x-api-key": API_KEY, // [Napomena]: API ključ se prosleđuje kroz header x-api-key
      },
    });

    if (!response.ok) {
      throw new Error(`Greška pri učitavanju: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Uspešan odgovor od API-ja:", data);
    return data;
  } catch (error) {
    console.error("Greška u fetchCartData:", error.message);
    throw error; // Prosleđivanje greške dalje u komponentu koja poziva ovu funkciju
  }
};
