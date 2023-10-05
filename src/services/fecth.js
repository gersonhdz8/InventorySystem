export async function loginUser(username, password) {
    try {
        const response = await fetch("http://127.0.0.10:3010/auth/users/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
    
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
        const responseData = await response.json();
        return responseData; // Retorna los datos del usuario o lo que necesites
        }
        catch (error) {
        console.error("Error:", error);
        throw error; // Propaga el error hacia el componente
    }
}