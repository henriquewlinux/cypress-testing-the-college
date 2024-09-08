// Importar o mongoose
const mongoose = require('mongoose');

// Conectar ao MongoDB
mongoose.connect('mongodb://10.50.0.15:27017/thecollegestore', {
});

// Definir o schema do documento
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cartData: Object,
  date: Date,
});

// Criar o modelo
const User = mongoose.model('User', UserSchema);

// Função para remover usuários com emails específicos
async function removeUserByEmail(emailToRemove) {
  try {
    // Remover o(s) documento(s) com o email especificado
    const result = await User.deleteOne({ email: emailToRemove });
    
    if (result.deletedCount === 0) {
      console.log('Nenhum documento encontrado com o email:', emailToRemove);
    } else {
      console.log('Documento removido com sucesso:', emailToRemove);
    }
  } catch (err) {
    console.error('Erro ao remover o documento:', err);
  } finally {
    // Fechar a conexão com o MongoDB
    mongoose.connection.close();
  }
}

// Chamar a função com o email a ser removido
removeUserByEmail('register@mail.com');