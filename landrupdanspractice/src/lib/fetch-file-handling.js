// lib is a folder for helping functions
export default function fetchErrorHandling(response) {
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("Bad request in fetch.");
    }

    if (response.status === 403) {
      throw new Error("Forbidden action in fetch.");
    }
  }
  
}
