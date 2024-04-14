"use client";
import { Container, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants";

import FileUploader from "./components/FileUploader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleOnDrop = async (acceptedFiles: File[]) => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", acceptedFiles[0]);

      const resp = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          description: error.message,
          status: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Container>
        <Heading textAlign="center" mb="2">
          Bank Statements OCR
        </Heading>
        <FileUploader onDrop={handleOnDrop} isLoading={isLoading} />
      </Container>
    </main>
  );
}
