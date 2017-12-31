package com.alexitc.coinalerts.data

import com.alexitc.coinalerts.commons.ApplicationResult
import com.alexitc.coinalerts.models.{Currency, Exchange, ExchangeCurrency, Market}

import scala.language.higherKinds

trait ExchangeCurrencyDataHandler[F[_]] {

  def getBy(exchange: Exchange, market: Market, currency: Currency): F[Option[ExchangeCurrency]]
}

trait ExchangeCurrencyBlockingDataHandler extends ExchangeCurrencyDataHandler[ApplicationResult]