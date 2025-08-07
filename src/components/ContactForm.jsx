import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().min(8, { message: "Por favor, insira um número de telefone válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      const endpoint = `${window.location.origin}/wp-json/grafica-eleal/v1/contact-form`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi OK');
      }

      const result = await response.json();

      if (result.success) {
        toast.success("Mensagem enviada com sucesso!", {
          description: "Entraremos em contato em breve. Obrigado!",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Ocorreu um erro no servidor.');
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Falha ao enviar mensagem.", {
        description: "Por favor, tente novamente mais tarde ou use um dos nossos outros canais de contato.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="seu.email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Seu telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sua Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite aqui os detalhes do seu projeto ou sua dúvida..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
      </form>
    </Form>
  );
}