<template>
  <div class="wrapper">
    <form>
      <div v-show="step === 1" class="step">
        <div class="form-group">
          <label for="surname">Фамилия</label>
          <input type="text" class="form" id="surname" placeholder="Иванов">
        </div>

        <div class="form-group">
          <label for="name">Имя</label>
          <input type="text" class="form" id="name" placeholder="Иван">
        </div>

        <div class="form-group">
          <label for="patronymic">Отчество</label>
          <input type="text" class="form" id="patronymic " placeholder="Иванович">
        </div>

        <div class="form-group">
          <label for="date of birth">Дата рождения</label>
          <input type="text" class="form" id="date of birth" placeholder="15.05.1976">
        </div>

        <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input type="text" class="form" id="patronymic" placeholder="+79999999999">
        </div>

        <div class="form-group">
          <label for="gender">Пол</label>
          <input type="text" class="form" id="gender" placeholder="Женщина">
        </div>

        <div class="form-group">
          <label for="client">Группа клиентов</label>
          <select class="form" id="client" v-model="form.favorite" multiple>
            <option
                v-for="(client, index) in clients"
                :value="client.value"
                :key="index">
              {{ client.label }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="doctor">Лечащий врач</label>
          <select class="form" id="doctor" v-model="form.doctor">
            <option
                v-for="(doctor, index) in doctors"
                :value="doctor.value"
                :key="index">
              {{ doctor.label }}
            </option>
          </select>
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" v-model="sensSms" id="notification">
          <label class="form-check-label" for="notification">Не отправлять СМС</label>
        </div>

        <div class="button_wrapper">
          <button @click="nextStep" type="button" class="btn">Следующий шаг</button>
        </div>

      </div>


      <div v-show="step === 2" class="step">

        <div class="form-group_2">
          <label for="index">Индекс</label>
          <input type="text" class="form" id="index">
        </div>

        <div class="form-group_2">
          <label for="country">Страна</label>
          <input type="text" class="form" id="country">
        </div>

        <div class="form-group_2">
          <label for="oblast">Область</label>
          <input type="text" class="form" id="oblast">
        </div>

        <div class="form-group_2">
          <label for="town">Город</label>
          <input type="text" class="form" id="town">
        </div>

        <div class="form-group_2">
          <label for="street">Улица</label>
          <input type="text" class="form" id="street">
        </div>

        <div class="form-group_2">
          <label for="house">Дом</label>
          <input type="text" class="form" id="house">
        </div>


        <div class="button_wrapper">
          <button @click="backtStep" type="button" class="btn btn1">Назад</button>
          <button @click="nextStep" type="button" class="btn">Следующий шаг</button>
        </div>

      </div>


      <div v-show="step === 3" class="step">

        <div class="form-group_2">
          <label for="document">Тип документа</label>
          <select class="form" id="document" v-model="form.document">
            <option
                v-for="(document, index) in documents"
                :value="document.value"
                :key="index">
              {{ document.label }}
            </option>
          </select>
        </div>


        <div class="form-group_2">
          <label for="seria">Серия</label>
          <input type="text" class="form" id="seria">
        </div>

        <div class="form-group_2">
          <label for="number_pasport">Номер</label>
          <input type="text" class="form" id="number_pasport">
        </div>

        <div class="form-group_2">
          <label for="issuedwhom">Кем выдан</label>
          <input type="text" class="form" id="issuedwhom">
        </div>

        <div class="form-group_2">
          <label for="dateissuedwhom">Дата выдачи</label>
          <input type="text" class="form" id="dateissuedwhom">
        </div>

        <div class="button_wrapper">
          <button @click="backtStep" type="button" class="btn btn1">Назад</button>
          <button type="submit" class="btn">Отправить</button>
        </div>

      </div>

    </form>
  </div>

</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      step: 1,
      form: {
        doctor: "Ivanov",
        favorite: ["VIP"],
        sensSms: true,
        client: "problems",
        document: "pasport",
      },
      doctors: [{
        label: "Иванов",
        value: "Ivanov"
      },
        {
          label: "Захаров",
          value: "Zacharov"
        },
        {
          label: "Чернышева",
          value: "Chernehev"
        }
      ],
      clients: [
        {
          label: "VIP",
          value: "VIP"
        },
        {
          label: "Проблемные",
          value: "problems"
        },
        {
          label: "ОМС",
          value: "Oms"

        }
      ],
      documents: [{
        label: "Паспорт",
        value: "pasport"
      },
        {
          label: "Свидетельство о рождении",
          value: "Birth certificate"
        },
        {
          label: "Водительское удостоверение",
          value: "driver's license"
        }
      ]
    }
  },
  validations () {
    return {
    form: {
      surname: {
        required
      }
    }
  }},
  methods: {
    nextStep() {
      this.step++
    },
    backtStep() {
      this.step--
    }

  },

}

</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  margin-top: 10px;
  width: 200px;
  height: 35px;
}

.form-group {
  display: block;
  width: 200px;
  margin-top: 10px;

}

.form-group_2 {
  display: block;
  width: 200px;
  margin-top: 10px;
  margin-left: 90px;
}

.btn1 {
  margin-right: 10px;
}

.btn {
  width: 200px;
  height: 40px;
  background-color: #156963;
  color: white;
  border: none;
  border-radius: 7px;
  margin-top: 10px;
  cursor: pointer;
}

.button_wrapper {
  margin-top: 20px;
}


</style>
