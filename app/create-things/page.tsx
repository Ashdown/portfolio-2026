"use client";

import { FormEvent, useRef, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    try {
      const response = await fetch("/api/things", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error("Failed to create thing");
      }

      const data = await response.json();
      setMessage(`Thing created successfully! ID: ${data.id}`);
      formRef.current?.reset();
    } catch (error) {
      setMessage("Error creating thing. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Create a Thing</h1>
      <p>Fill out the form and click submit to create a thing</p>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="thingName">Thing Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
