<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register('name', { required: true })}
    placeholder="Nome completo"
  />
  {errors.name && <span className="error-msg">Nome é obrigatório</span>}
  <input
    type="email"
    {...register('email', { required: true })}
    placeholder="Endereço de e-mail"
  />
  {errors.email && <span className="error-msg">E-mail é obrigatório</span>}
  <Textarea {...register('message')} />
  <button type="submit">Enviar</button>
</form>;
