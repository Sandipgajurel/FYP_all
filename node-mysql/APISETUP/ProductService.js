// import API from './Api';
// import request from '../../../../configs/request';

// const qs = require('qs')


// class VehicleService {

//      async GetAllVehicles(vehicleTypeId: any, offset: number, limit: number, query: string): Promise<ApiResponse> {
//         try {
//             const res = await (await request()).get(API.GetAllVehicles + "?vt=" + vehicleTypeId + "&offset=" + offset + "&limit=" + limit + "&query=" + query);
//             const response = await res.data;
//             return {
//                 Data: response.Data,
//                 Message: response.Message,
//                 Code: response.Code,
//                 loading: false
//             }
//         }
//         catch (error) {
//             return {
//                 Message: error.response.statusText,
//                 Code: error.response.status,
//                 Data: null,
//                 loading: false
//             }
//         }
//     }

//     public async GetAllVehicleTypes(offset: number, limit: number, query: string): Promise<ApiResponse> {
//         try {
//             const res = await (await request()).get(API.GetAllVehicleTypes + "?offset=" + offset + "&limit=" + limit + "&query=" + query);
//             const response = await res.data;
//             return {
//                 Data: response.Data,
//                 Message: response.Message,
//                 Code: response.Code,
//                 loading: false
//             }
//         }
//         catch (error) {
//             return {
//                 Message: error.response.statusText,
//                 Code: error.response.status,
//                 Data: null,
//                 loading: false
//             }
//         }
//     }

//     public async GetVehicleTypeDetail(id: any): Promise<ApiResponse> {
//         try {
//             const res = await (await request()).get(API.GetVehicleTypeDetail + "?id=" + id);
//             const response = await res.data;
//             return {
//                 Data: response.Data,
//                 Message: response.Message,
//                 Code: response.Code,
//                 loading: false
//             }
//         }
//         catch (error) {
//             return {
//                 Message: error.response.statusText,
//                 Code: error.response.status,
//                 Data: null,
//                 loading: false
//             }
//         }
//     }
//     public async SaveVehicleType(model: any): Promise<ApiResponse> {
//         try {
//             var form_data = new FormData();

//             for (var key in model) {
//                 form_data.append(key, model[key]);
//             }
//             const res = await (await request()).post(API.SaveVehicleType, form_data, {
//                 headers: {
//                     'content-type': 'multipart/form-data'
//                 }
//             });
//             const response = await res.data;
//             return {
//                 Data: response.Data,
//                 Message: response.Message,
//                 Code: response.Code,
//                 loading: false
//             }
//         }
//         catch (error) {
//             return {
//                 Message: error.response.statusText,
//                 Code: error.response.status,
//                 Data: null,
//                 loading: false
//             }
//         }
//     }

//     public async DeleteVehicleType(role: any): Promise<ApiResponse> {
//         try {
//             const res = await (await request()).post(API.DeleteVehicleType, qs.stringify(role));
//             const response = await res.data;
//             return {
//                 Data: response.Data,
//                 Message: response.Message,
//                 Code: response.Code,
//                 loading: false
//             }
//         }
//         catch (error) {
//             return {
//                 Message: error.response.statusText,
//                 Code: error.response.status,
//                 Data: null,
//                 loading: false
//             }
//         }
//     }

// }


// export default new VehicleService();