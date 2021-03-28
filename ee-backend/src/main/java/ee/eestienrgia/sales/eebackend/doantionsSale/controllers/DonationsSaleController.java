package ee.eestienrgia.sales.eebackend.doantionsSale.controllers;

import ee.eestienrgia.sales.eebackend.bakesale.models.BakeSaleRepository;
import ee.eestienrgia.sales.eebackend.bakesale.models.data.BakeSale;
import ee.eestienrgia.sales.eebackend.doantionsSale.models.DonationSaleRepository;
import ee.eestienrgia.sales.eebackend.doantionsSale.models.data.DonationSale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/1.0")
public class DonationsSaleController {

    @Autowired
    DonationSaleRepository donationSaleRepository;

    @GetMapping("/donationSales")
    List<DonationSale> getDonationItems(){
        return donationSaleRepository.findAll();

    }
}
